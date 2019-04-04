import { h, Component } from "preact";
import { Page } from "../../components";
import prefs from "../../data/prefs";

const Test = () => {
  let unit = prefs.get(prefs.draftId);
  let data = prefs.get(prefs.draftBulletin);

  return (
    <Page title="Test Page">
      <div class="w3-container w3-white">
        <h3>Test</h3>
      </div>
    </Page>
  );
};

export default Test;
