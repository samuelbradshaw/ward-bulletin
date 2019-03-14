import { h, Component } from "preact";
import prefs from "../../data/prefs";
import { CheckBox, RadioButtons, NumberInput } from "../../components";

class Settings extends Component {
  render({ update }, { hideLabels }) {
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

        <div class="w3-card w3-container">
          <h5>Print</h5>
          <ColumnsOptions update={() => this.setState({})} />
          <p>
            <NumberInput
              title="Center margin:"
              postscript="inches"
              value={prefs.get(prefs.centerMargin)}
              step={0.25}
              onChange={value => {
                prefs.set(prefs.centerMargin, value);
                console.log("Center margin:", prefs.get(prefs.centerMargin));
              }}
            />
          </p>
          <p>
            <NumberInput
              title="Edge margin:"
              postscript="inches"
              value={prefs.get(prefs.edgeMargin)}
              step={0.25}
              onChange={value => prefs.set(prefs.edgeMargin, value)}
            />
          </p>
          <p />
        </div>
      </div>
    );
  }
}

let ColumnsOptions = ({ update }) => {
  let printColumns = prefs.get(prefs.printColumns) || 2;
  return (
    <RadioButtons
      items={["1 column (portrait)", "2 columns (landscape)"]}
      selected={printColumns - 1}
      select={index => {
        prefs.set(prefs.printColumns, index + 1);
        update();
      }}
    />
  );
};

export default Settings;
