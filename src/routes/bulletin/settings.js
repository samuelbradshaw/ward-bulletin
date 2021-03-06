import { h, Component } from "preact";
import prefs from "../../data/prefs";
import { setThemeColor, RadioButtons } from "../../components";

const Settings = ({ update }) => {
  return (
    <div>
      <h4>Settings</h4>
      <div class="w3-card w3-container">
        <h5>Separator Dots</h5>
        <LeaderMenu update={update} />
        <p />
      </div>
      <div class="w3-card w3-container">
        <h5>When Tapping on a Hymn:</h5>
        <HymnMenu update={update} />
        <p />
      </div>
      <div class="w3-card w3-container w3-margin-top">
        <h5>App Color Theme</h5>
        <ColorMenu />
        <p />
      </div>
    </div>
  );
};

let LeaderMenu = ({ update }) => {
  let leaders = [" .", " -", "  "];
  let leaderChar = prefs.get(prefs.leaderChar);
  return (
    <RadioButtons
      items={[". . . .", "- - - -", "None"]}
      selected={leaders.indexOf(leaderChar)}
      select={index => {
        prefs.set(prefs.leaderChar, leaders[index]);
        update();
      }}
    />
  );
};

let HymnMenu = ({ update }) => {
  let useHymnsApp = prefs.get(prefs.useHymnsApp);
  return (
    <RadioButtons
      items={["View in this app", "Open in LDS Hymns app"]}
      selected={useHymnsApp ? 1 : 0}
      select={index => {
        prefs.set(prefs.useHymnsApp, index === 1);
        update();
      }}
    />
  );
};

const ColorMenu = () => {
  const colorsArray = [
    ["blue", "#2196F3"],
    ["amber", "#ffc107"],
    // ["aqua", "#00ffff"],
    ["light-blue", "#87CEEB"],
    ["brown", "#795548"],
    ["cyan", "#00bcd4"],
    ["blue-grey", "#607d8b"],
    ["green", "#4CAF50"],
    ["light-green", "#8bc34a"],
    ["indigo", "#3f51b5"],
    ["khaki", "#f0e68c"],
    ["lime", "#cddc39"],
    ["orange", "#ff9800"],
    ["deep-orange", "#ff5722"],
    ["pink", "#e91e63"],
    ["purple", "#9c27b0"],
    ["deep-purple", "#673ab7"],
    ["red", "#f44336"],
    // ["sand", "#fdf5e6"],
    ["teal", "#009688"],
    ["yellow", "#ffeb3b"],
    // ["white", "#fff"],
    ["black", "#000"],
    ["grey", "#9e9e9e"],
    // ["light-grey", "#f1f1f1"],
    ["dark-grey", "#616161"]
    // ["pale-red", "#ffdddd"],
    // ["pale-green", "#ddffdd"],
    // ["pale-yellow", "#ffffcc"],
    // ["pale-blue", "#ddffff"]
  ];
  const colors = new Map(colorsArray);
  let swatches = [];
  const menuId = "color-menu";

  for (let [name, color] of colors) {
    let swatch = (
      <div
        class="w3-round w3-border w3-border-dark-grey"
        style={{
          backgroundColor: color,
          width: "44px",
          height: "44px",
          marginRight: "8px",
          marginBottom: "8px",
          display: "inline-block"
        }}
        title={name.replace("-", " ")}
        onClick={e => {
          prefs.set(prefs.themeColor, name);
          setThemeColor(name);
          e.stopPropagation();
        }}
      />
    );
    swatches.push(swatch);
  }
  return <div class="w3-margin-left">{swatches}</div>;
};

export default Settings;
export { ColorMenu };
