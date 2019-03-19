import { h, Component } from "preact";
import prefs from "../../data/prefs";
import { CheckBox, RadioButtons, NumberInput } from "../../components";

class Settings extends Component {
  render({ update, settings }, { hideLabels }) {
    let autoDate = settings.autoDate || "Sunday";
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
      </div>
    );
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
