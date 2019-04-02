import { h, Component } from "preact";
import { Page } from "../../components";
import SaveTemplate from "../editor/save-template";
import prefs from "../../data/prefs";

const Test = () => {
  let unit = prefs.get(prefs.draftId);
  let data = prefs.get(prefs.draftBulletin);

  return (
    <Page title="Test Page">
      <div class="w3-container">
        <SaveTemplate unit={unit} data={data} />
      </div>
    </Page>
  );
};

export default Test;
