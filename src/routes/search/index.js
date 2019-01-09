import { h, Component } from "preact";
import style from "./style";
import Header from "../../components/header";

export default class Search extends Component {
  state = {};

  render() {
    return (
      <div class="fullheight">
        <Header title="Search" back="/" />
        <div class={"pagecontent w3-content fullheight"}>
          <div class={style.editor}>
            <h1>Search</h1>
            <p>Search for ward bulletin.</p>
          </div>
        </div>
      </div>
    );
  }
}
