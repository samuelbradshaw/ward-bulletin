import { h, Component } from "preact";
import { route } from "preact-router";
import { Page } from "../../components";
import prefs from "../../data/prefs";
import {
  PopupMenu,
  ToolbarButton,
  toggleMenu,
  setThemeColor
} from "../../components";
import Bulletin from "../bulletin";

const Home = () => {
  let hash = location.hash;
  if (hash.startsWith("#")) {
    // if url path is /#/:unit, show bulletin
    let unit = hash.replace("#/", "");
    return <Bulletin unit={unit} />;
  }

  let recents = prefs.get(prefs.recents);
  return (
    <Page title="Ward Bulletin App">
      <div class="w3-white w3-container" style={{ paddingBottom: "300px" }}>
        <h5>Find Ward Bulletin</h5>
        <div class="w3-card w3-container">
          <p>
            View your bulletin by using your current location to find the
            closest bulletins or search using the name of your ward.
          </p>
          <div class="w3-row">
            <div class="w3-quarter w3-section w3-center">
              <button
                class="w3-btn w3-border-theme w3-round w3-border"
                onClick={() => route("/locate")}
              >
                Find by Location
              </button>
            </div>
            <div class="w3-quarter w3-section w3-center">
              <button
                class="w3-btn w3-border-theme w3-round w3-border"
                onClick={() => route("/search")}
              >
                Search by Name
              </button>
            </div>
          </div>
        </div>

        {recents && recents.length && (
          <div>
            <h5>Recent Ward Bulletins</h5>
            <div class="w3-card w3-container">
              <ul class="w3-ul w3-margin-bottom">
                {recents.map(ward => (
                  <div class="w3-quarter w3-section w3-center">
                    <span
                      class="w3-btn w3-border-bottom w3-border-theme"
                      style={{ padding: 0 }}
                      onClick={() => route(`/#/${ward.id}`)}
                    >
                      {ward.name}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}

        <h5>Edit Ward Bulletin</h5>
        <div class="w3-card w3-container">
          <p>
            If you are a bulletin editor for your ward, login or create a new
            account to edit your ward bulletin.
          </p>
          <div class="w3-quarter w3-section w3-center">
            <button
              class="w3-btn w3-border-theme w3-round w3-border"
              onClick={() => route("/editor")}
            >
              Edit Bulletin
            </button>
          </div>
        </div>

        <h5>Settings</h5>
        <div class="w3-card w3-container">
          <div class="w3-container">
            <p>
              Dots used to separate the title on the left from the value on the
              right
            </p>
            <LeaderMenu />
            <p>Set the color used throughout the app</p>
            <ColorMenu />
            <p />
          </div>
        </div>
      </div>
    </Page>
  );
};

class LeaderMenu extends Component {
  state = {
    leaderChar: prefs.get(prefs.leaderChar) || " ."
  };

  render({}, { leaderChar }) {
    let title = `Dots ${leaderChar.trim() ? leaderChar.repeat(3) : ""}`;
    let items = [[".", " ."], ["-", " -"], ["None", "  "]];
    return (
      <PopupMenu
        title={title}
        items={items}
        handler={leaderChar => {
          prefs.set(prefs.leaderChar, leaderChar);
          this.setState({ leaderChar });
        }}
      />
    );
  }
}

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
          width: "50px",
          height: "44px",
          marginRight: "10px"
        }}
        onClick={e => {
          toggleMenu(menuId);
          prefs.set(prefs.themeColor, name);
          setThemeColor(name);
          e.stopPropagation();
        }}
        isButton
      />
    );
    swatches.push(swatch);
  }

  let items = [];
  while (swatches.length) {
    let rowSwatches = swatches.splice(0, 5);
    let row = [
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        {rowSwatches}
      </div>,
      ""
    ];
    items.push(row);
  }

  let title = "App Color";
  return (
    <div class="w3-margin-left">
      <PopupMenu menuId={menuId} title={title} items={items} />
    </div>
  );
};

export default Home;
