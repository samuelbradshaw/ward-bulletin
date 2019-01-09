import { h, Component } from "preact";
import style from "./style";
import Header from "../../components/header";

export default class Locate extends Component {
  state = {};

  render() {
    return (
      <div class="fullheight">
        <Header title="Locate" back="/" />
        <div class={"pagecontent w3-content fullheight"}>
          <div class={style.editor}>
            <h1>Locate</h1>
            <p>Locate ward bulletin.</p>
          </div>
        </div>
      </div>
    );
  }
}
