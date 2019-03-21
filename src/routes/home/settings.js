import { h, Component } from "preact";
import { ColorMenu } from "../bulletin/settings";

const Settings = ({ update }) => {
  return (
    <div>
      <h4>Settings</h4>
      <div class="w3-card w3-container w3-margin-top">
        <h5>App Color Theme</h5>
        <ColorMenu />
        <p />
      </div>
    </div>
  );
};

export default Settings;
