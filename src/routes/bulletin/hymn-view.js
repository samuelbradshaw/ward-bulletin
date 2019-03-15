import { h, Component } from "preact";
import { Page } from "../../components";
import hymns from "../../assets/hymns.json";

export default function HymnView({ hymn }) {
  let item = hymns[hymn - 1];
  if (item.id) {
    let url = `https://media.ldscdn.org/pdf/music/hymns/${item.id}-${
      item.uri
    }-eng.pdf`;
    return (
      <Page title={item.name} goBack>
        <object
          data={url}
          type="application/pdf"
          class="fullheight fullwidth"
        />
      </Page>
    );
  }
  return (
    <Page title={item.name} goBack>
      <div class="w3-container w3-panel w3-pale-yellow">
        <p>
          This song is not available due to copyright restriction or
          availability.
        </p>
      </div>
    </Page>
  );
}
