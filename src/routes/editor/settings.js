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
import styleCSS from "../bulletin/bulletin-style.txt";

function Settings({ update, settings }) {

  return (
    <div>
      <h4>Settings</h4>

      <LabelsSetting update={update} />
      <p />

      <DateSetting update={update} settings={settings} />
      <p />

      <StyleSetting update={update} settings={settings} />
      <p />

      <PrintSetting settings={settings} update={() => {
        update();
      }} />
      <p />

      <LoginSettings />
      <p />
    </div>
  );
}

function LabelsSetting({ update }) {
  return (
    <div class="w3-card w3-container">
      <h5>Labels</h5>
      <CheckBox
        title="Show labels"
        checked={!prefs.get(prefs.hideLabels)}
        onChange={checked => {
          prefs.set(prefs.hideLabels, !checked);
          update();
        }}
      />
    </div>);
}

function DateSetting({ settings, update }) {
  let autoDate = settings.autoDate || "Sunday";
  return (
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
    </div>);
}

function PrintSetting({ update, settings }) {
  return (
    <div class="w3-card w3-container">
      <h5>Print</h5>
      <ColumnsOptions
        settings={settings}
        update={update}
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
  )
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

function StyleSetting({ update, settings }) {
  return (
    <div class="w3-card w3-container">
      <h5>Style</h5>
      <p>Change the style of the bulletin including fonts, colors, text sizes, etc. This requires at least a basic understanding of <a href="https://www.w3schools.com/css/" target="_blank">HTML style sheets (CSS)"</a>. Click the Reset button if the styles aren't working due to errors and you are unable to fix the errors.</p>

      <textarea id="bulletin-style-editor" style={{ width: '100%', height: 300 }} onKeydown={(event) => {
        if (event.keyCode === 9) {
          // handle TAB key
          let target = event.target;
          let v = target.value, s = target.selectionStart, e = target.selectionEnd;
          target.value = v.substring(0, s) + '\t' + v.substring(e); target.selectionStart = target.selectionEnd = s + 1;
          event.preventDefault();
        }
      }}>
        {settings.style || styleCSS}
      </textarea>
      <p />
      <Button onClick={e => {
        let styleEditor = document.getElementById("bulletin-style-editor");
        settings.style = styleEditor.value;
        update();
      }}>Update</Button>
      <Button danger class="w3-right" onClick={e => {
        if (confirm("Are you sure you want to reset the styles and lose all changes you have made?")) {
          settings.style = undefined;
          update();
        }

      }}>Reset</Button>
      <p />
    </div>
  );
}

class LoginSettings extends Component {
  constructor(props) {
    super(props);
    let user = firebase.auth().currentUser;
    this.email = user.email;
  }

  render() {
    return (
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

export default Settings;
