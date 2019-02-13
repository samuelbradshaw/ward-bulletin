import { h, Component } from "preact";
import { Page } from "../../components";
import prefs from "../../data/prefs";
import firebase, { startAuthUI, currentUser } from "../../data/firebase";
import "../../style/login-style.css";
import BulletinData from "../../data/bulletindata";

import EditorMain from "./editor-main";

let containerId = "firebaseui-auth-container";
let pageTitle = "Sign In";

export default class Editor extends Component {
  message = null;
  state = { status: "checking" };

  componentDidMount() {
    // see if we are logged in
    firebase.auth().onAuthStateChanged(
      user => {
        this.setState({ status: user ? "loggedin" : "loggedout" });
      },
      error => {
        this.error = error;
        this.setState({ status: "error" });
        console.log(error);
      }
    );
  }

  componentDidUpdate() {
    if (this.state.status === "loggedout") {
      startAuthUI(containerId);
    }
  }

  render({}, { status }) {
    switch (status) {
      case "loggedin":
        let user = currentUser();
        if (user.displayName) {
          // displayName == unit id
          return <EditorMain unit={user.displayName} />;
        } else {
          return (
            <Page title="Create New Account">
              <UnitForm
                done={(wardName, wardId) => this.newAccount(wardName, wardId)}
              />
            </Page>
          );
        }
      case "loggedout":
        return (
          <Page title={pageTitle}>
            <div class="w3-margin-top w3-card w3-container w3-white w3-large">
              <p>
                Enter email and password to sign in or create a new account.
              </p>
            </div>
            <div class="w3-margin-top" id={containerId} />
          </Page>
        );
      case "error":
        return (
          <Page title="Sign-in Error">
            <div class="w3-container">{this.error}</div>
          </Page>
        );
      default:
        // checking...
        return (
          <Page title={pageTitle} showLoader={true} message={this.message} />
        );
    }
  }

  newAccount(wardName, wardId) {
    // get initial data and publish it
    let data = BulletinData.getInitialData();
    data.settings.name = wardName;
    BulletinData.saveBulletin(wardId, data)
      .then(() => {
        // set ward id as user display name
        var user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: wardId
          })
          .then(() => {
            // Ready!
            prefs.set(prefs.currentDraft, data);
            this.setState({ status: "loggedin" });
          })
          .catch(error => {
            // An error happened.
            this.error = error;
            this.setState({ status: "error" });
            console.log(error);
          });
      })
      .catch(error => {
        // An error happened.
        this.error = error;
        this.setState({ status: "error" });
        console.log(error);
      });
    this.message = "Setting Up Account";
    this.setState({ status: "checking" });
  }
}

class UnitForm extends Component {
  wardName = "";
  wardId = "";
  state = { enableButton: false };

  render() {
    return (
      <form class="w3-container w3-card-4 w3-light-grey">
        <h3>Create Ward Bulletin Account</h3>
        <p>
          Enter the name of the ward and a ward ID to identify this ward. The ID
          must be at least 6 characters and may consist of letters and numbers
          with no spaces. Ward ID examples: pv23ward, biglake, east-side
        </p>

        <p>
          <label>Ward Name</label>
          <input
            id="ward-name-input"
            class="w3-input w3-border"
            name="ward-name"
            type="text"
            onInput={e => {
              this.wardName = e.target.value;
              this.setButtonStatus();
            }}
          />
        </p>

        <p>
          <label>Ward ID</label>
          <input
            id="ward-name-input"
            class="w3-input w3-border"
            name="ward-id"
            type="text"
            onInput={e => this.validateId(e.target)}
          />
        </p>

        <button
          class={
            "w3-button w3-theme w3-section" +
            (this.state.enableButton ? "" : " w3-disabled")
          }
          onClick={() => {
            this.props.done(this.wardName, this.wardId);
            return;
          }}
        >
          Done
        </button>
      </form>
    );
  }

  validateId(input) {
    let value = input.value;
    let validValue = value.replace(/[^\d\w]/g, "");
    if (value !== validValue) {
      input.value = validValue;
    }
    this.wardId = validValue;
    this.setButtonStatus();
  }

  setButtonStatus() {
    let enableButton = this.wardId.length >= 6 && this.wardName.length;
    this.setState({ enableButton });
  }
}
