import { h, Component } from "preact";
import prefs from "../../data/prefs";
import {
  CheckBox,
  RadioButtons,
  NumberInput,
  Label,
  TextInput,
  Button,
  Loader
} from "../../components";
import firebase from "../../data/firebase";

class Settings extends Component {
  render({ update, settings }, {}) {
    let autoDate = settings.autoDate || "Sunday";
    let user = firebase.auth().currentUser;
    this.email = user.email;

    return (
      <div>
        <h4>Settings</h4>
        <div class="w3-card w3-container">
          <h5>Labels</h5>
          <CheckBox
            title="Show labels"
            checked={!prefs.get(prefs.hideLabels)}
            onChange={checked => {
              prefs.set(prefs.hideLabels, !checked);
              this.setState({ hideLabels: !checked });
              update();
            }}
          />
        </div>
        <p />

        <div class="w3-card w3-container">
          <h5>Date</h5>
          <p>
            Date items will automatically be set to the next date on the
            specified day of the week unless turned off
          </p>
          <select
            class="w3-border w3-border-theme"
            onChange={e => {
              settings.autoDate = e.target.value;
              update();
            }}
          >
            {[
              "Off",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ].map(value => (
              <option value={value} selected={value === autoDate}>
                {value}
              </option>
            ))}
          </select>
          <p />
        </div>
        <p />

        <div class="w3-card w3-container">
          <h5>Print</h5>
          <ColumnsOptions
            settings={settings}
            update={() => {
              this.setState({});
              update();
            }}
          />
          <p>
            <NumberInput
              title="Center margin:"
              postscript="inches"
              value={settings.centerMargin || 0.5}
              step={0.25}
              onChange={value => {
                settings.centerMargin = value;
                update();
              }}
            />
          </p>
          <p>
            <NumberInput
              title="Edge margin:"
              postscript="inches"
              value={settings.edgeMargin || 0.0}
              step={0.25}
              onChange={value => {
                settings.edgeMargin = value;
                update();
              }}
            />
          </p>
          <p />
        </div>
        <p />

        <div class="w3-card w3-container">
          <h5>Email and Password</h5>
          <p>
            Change your login email and/or password. If you are being replaced
            by another bulletin editor, you may just change the email address,
            then when your replacement logs in, they can click on the "Trouble
            signing in?" link to reset the password.
          </p>
          <Label name="Current Email" />
          <TextInput value={this.email} readonly />
          <Label name="Current Password" />
          <TextInput
            type="password"
            onChange={e => (this.password = e.target.value)}
          />
          <Label name="New Email" />
          <TextInput onChange={e => (this.newEmail = e.target.value)} />
          <Label name="New Password" />
          <TextInput
            type="password"
            onChange={e => (this.newPassword = e.target.value)}
          />
          <p />
          <Button onClick={e => this.updateSignin()}>Update</Button>
        </div>
        <p />
      </div>
    );
  }

  updateSignin() {
    if (!this.password) {
      alert("Please enter your current password");
      return;
    }
    if (!this.newEmail && !this.newPassword) {
      alert("Please enter a new email and/or new password");
      return;
    }

    let user = firebase.auth().currentUser;
    let credential = firebase.auth.EmailAuthProvider.credential(
      this.email,
      this.password
    );

    document.body.style.cursor = "wait";

    user
      .reauthenticateAndRetrieveDataWithCredential(credential)
      .then(() => this.newEmail && user.updateEmail(this.newEmail))
      .then(() => this.newPassword && user.updatePassword(this.newPassword))
      .then(() =>
        this.finishUpdateWithMessage(
          this.newEmail && this.newPassword
            ? "Updated email and password"
            : this.newEmail
            ? "Updated email"
            : "Updated password"
        )
      )
      .catch(
        error => this.finishUpdateWithMessage(error.toString())
        // An error happened.
      );
  }

  finishUpdateWithMessage(message) {
    document.body.style.cursor = "default";
    alert(message);
  }
}

let ColumnsOptions = ({ settings, update }) => {
  let printColumns = settings.printColumns || 2;
  return (
    <RadioButtons
      items={["1 column (portrait)", "2 columns (landscape)"]}
      selected={printColumns - 1}
      select={index => {
        settings.printColumns = index + 1;
        update();
      }}
    />
  );
};

export default Settings;
