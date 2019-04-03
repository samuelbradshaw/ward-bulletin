import { h, Component } from "preact";
import { Page } from "../../components";
import Settings from "../editor/settings";
import prefs from "../../data/prefs";

const Test = () => {
  let unit = prefs.get(prefs.draftId);
  let data = prefs.get(prefs.draftBulletin);

  let settings = {
    leaderchar: " .",
    name: "",
    printColumns: 2,
    centerMargin: 0.75,
    edgeMargin: 0.25,
    autoDate: "Sunday"
  };

  return (
    <Page title="Test Page">
      <div class="w3-container w3-white">
        <Settings settings={settings} />
      </div>
    </Page>
  );
};

export default Test;
