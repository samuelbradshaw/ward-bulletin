import { h, Component } from "preact";
import style from "./style";

export default class Editor extends Component {
  state = {};

  render() {
    return (
      <div class={style.editor}>
        <h1>Editor</h1>
        <p>This is the editor.</p>
      </div>
    );
  }
}
