import { h, Component } from "preact";
import { Page, Loader } from "../../components";
import prefs from "../../data/prefs";
import firebase, { startAuthUI } from "../../data/firebase";
import "../../style/login-style.css";

import EditorMain from "./editor-main";

let containerId = "firebaseui-auth-container";
let pageTitle = "Sign In";

export default class Editor extends Component {
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
        return <EditorMain />;
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
        return this.error;
      default:
        // checking...
        return (
          <Page title={pageTitle}>
            <Loader />
          </Page>
        );
    }
  }
}

function Login({}) {
  return <Page title={pageTitle}>Login</Page>;
}
