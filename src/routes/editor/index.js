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
  unit = null;
  state = { status: "checking" };

  componentDidMount() {
    // see if we are logged in
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          user.getIdTokenResult().then(idTokenResult => {
            let claims = idTokenResult.claims;
            if (claims) {
              this.unit = claims.unit;
            }
            this.setState({ status: "loggedin" });
          });
        } else {
          this.setState({ status: "loggedout" });
        }
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
        if (this.unit) {
          return <EditorMain unit={this.unit} />;
        } else {
          return (
            <Page title="Create New Account">
              <UnitForm
                done={(wardName, wardAddress, wardId) =>
                  this.newAccount(wardName, wardAddress, wardId)
                }
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

  newAccount(wardName, wardAddress, wardId) {
    // save new user
    var user = firebase.auth().currentUser;
    let data;
    BulletinData.addUnit(wardId, wardName, wardAddress, user.uid)
      .then(() => user.getIdToken())
      .then(token => {
        // get initial data and publish it
        data = BulletinData.getInitialData();
        data.settings.name = wardName;
        data.settings.address = wardAddress;
        return BulletinData.saveBulletin(wardId, data, token);
      })
      .then(() => user.getIdToken(true))
      .then(() => firebase.auth().currentUser.getIdTokenResult())
      .then(idTokenResult => {
        // Done!
        let claims = idTokenResult.claims;
        if (claims) {
          this.unit = claims.unit;
        }
        prefs.set(prefs.currentDraft, data);
        this.setState({ status: "loggedin" });
      })
      .catch(error => {
        // An error happened.
        alert(error);
        this.setState({ status: "loggedin" });
        console.log(error);
      });
    this.message = "Setting Up Account";
    this.setState({ status: "checking" });
  }
}

class UnitForm extends Component {
  wardName = "";
  wardAddress = "";
  wardId = "";
  state = { enableButton: false };

  render() {
    return (
      <div class="w3-container w3-card-4 w3-light-grey">
        <h3>Create Ward Bulletin Account</h3>
        <p>
          Enter the name and address of the ward and a ward ID to identify this
          ward. The ID must be at least 6 characters and may consist of letters
          and numbers with no spaces. Ward ID examples: pv23ward, biglake,
          east-side
        </p>

        <p>
          <label>Ward Name</label>
          <input
            class="w3-input w3-border"
            type="text"
            onInput={e => {
              this.wardName = e.target.value;
              this.setButtonStatus();
            }}
          />
        </p>

        <p>
          <label>Church Address</label>
          <input
            class="w3-input w3-border"
            type="text"
            onInput={e => {
              this.wardAddress = e.target.value;
              this.setButtonStatus();
            }}
          />
        </p>

        <p>
          <label>Ward ID</label>
          <input
            class="w3-input w3-border"
            type="text"
            onInput={e => this.validateId(e.target)}
          />
        </p>

        <button
          class={
            "w3-btn w3-theme w3-section" +
            (this.state.enableButton ? "" : " w3-disabled")
          }
          onClick={e => {
            e.stopPropagation();
            this.props.done(this.wardName, this.wardAddress, this.wardId);
          }}
        >
          Done
        </button>
      </div>
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
    let enableButton =
      this.wardId.length >= 6 &&
      this.wardName.length &&
      this.wardAddress.length;
    this.setState({ enableButton });
  }
}
