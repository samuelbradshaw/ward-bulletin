import { h, Component } from "preact";
import { Page } from "../../components";

export default function HymnView({ uri, id, name }) {
  let url = `http://media.ldscdn.org/pdf/music/hymns/${id}-${uri}-eng.pdf`;
  return (
    <Page title={name} goBack>
      <img src={url} class="fullheight w3-display-topmiddle" />
    </Page>
  );
}
