import { h, Component } from "preact";
import { Page } from "../../components";
import MediaLibrary from "../editor/media-library";

const Test = () => {
  return (
    <Page title="Test Page">
      <div class="w3-container">
        <MediaLibrary />
      </div>
    </Page>
  );
};

export default Test;
