import { h, Component } from "preact";
import style from "./style";
import { Page } from "../../components";

export default class Search extends Component {
  state = {};

  render() {
    return (
      <Page title="Search">
        <h1>Search</h1>
        <p>Search for ward bulletin.</p>
      </Page>
    );
  }
}
