import { h, Component } from "preact";
import style from "./style";
import { Page } from "../../components";

export default class Editor extends Component {
  state = {};

  render() {
    return (
      <Page title="Ward Bulletin Editor">
        <h1>Editor</h1>
        <p>Editor for ward bulletin.</p>
      </Page>
    );
  }
}
