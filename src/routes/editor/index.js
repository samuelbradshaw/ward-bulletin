import { h, Component } from "preact";
import style from "./style";
import Header from "../../components/header";

export default class Editor extends Component {
  state = {};

  render() {
    return (
      <div class="fullheight">
        <Header title="Ward Bulletin Editor" back="/" />
        <div class={"pagecontent w3-content fullheight"}>
          <div class={style.editor}>
            <h1>Editor</h1>
            <p>Editor for ward bulletin.</p>
          </div>
        </div>
      </div>
    );
  }
}
