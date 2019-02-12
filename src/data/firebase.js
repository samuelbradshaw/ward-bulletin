import firebase from "firebase/app";
import "firebase/auth";
import firebaseui from "firebaseui";
import "firebaseui";

let ui;

var config = {
  apiKey: "AIzaSyCSnrK3X_4pzbaieU-Qm5QzuD2CGOn5o3k",
  authDomain: "ward-bulletin-9b31d.firebaseapp.com",
  databaseURL: "https://ward-bulletin-9b31d.firebaseio.com",
  projectId: "ward-bulletin-9b31d",
  storageBucket: "ward-bulletin-9b31d.appspot.com",
  messagingSenderId: "861011314549"
};
firebase.initializeApp(config);

function startAuthUI(container) {
  let uiConfig = {
    // signInSuccessUrl: "<url-to-redirect-to-on-success>",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // Whether the display name should be displayed in the Sign Up page.
        requireDisplayName: false
      }
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    // tosUrl: "<your-tos-url>",
    // Privacy policy url/callback.
    // privacyPolicyUrl: function() {
    //   window.location.assign("<your-privacy-policy-url>");
    // }
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Process result. This will not trigger on merge conflicts.
        // On success redirect to signInSuccessUrl.
        // var isNewUser = authResult.additionalUserInfo.isNewUser;
        setTimeout(() => {
          ui.reset();
        }, 500);
        return true;
      },
      // signInFailure callback must be provided to handle merge conflicts which
      // occur when an existing credential is linked to an anonymous user.
      signInFailure: function(error) {
        console.log("sign in error:", error);
      }
    }
  };

  // Initialize the FirebaseUI Widget using Firebase.
  if (!ui) {
    ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.disableAutoSignIn();
  }

  ui.start("#" + container, uiConfig);
}

function logout() {
  firebase.auth().signOut();
}

function currentUser() {
  return firebase.auth().currentUser;
}

export default firebase;
export { startAuthUI, logout, currentUser };
