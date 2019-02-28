import { h, Component } from "preact";
import prefs from "../../data/prefs";

class Settings extends Component {
  state = { hideLabels: prefs.get(prefs.hideLabels) };

  render({ update }, { hideLabels }) {
    return (
      <div>
        <span
          onClick={e => {
            document.getElementById("settings-modal").style.display = "none";
            e.stopPropagation();
          }}
          class="w3-button w3-display-topright"
        >
          &times;
        </span>
        <h5>Settings</h5>
        <div class="w3-card w3-container">
          <div class="w3-container">
            <p>
              <input
                class="w3-check"
                type="checkbox"
                checked={!hideLabels}
                onChange={e => {
                  prefs.set(prefs.hideLabels, !hideLabels);
                  this.setState({ hideLabels: !hideLabels });
                  update();
                }}
              />
              <label>Show labels</label>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
