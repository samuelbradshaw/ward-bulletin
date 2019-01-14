import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page, Loader } from "../../components";
import BulletinView from "../bulletin/bulletin-view";
import EditorView from "./editor-view";

export default class Editor extends Component {
  unit = "pq3";
  state = { data: null };

  // gets called when this route is navigated to
  componentDidMount() {
    // get data
    BulletinData.getBulletinData(this.unit).then(data =>
      this.setState({ data })
    );
  }

  render({}, { data }) {
    if (data) {
      return (
        <Page title="Editor">
          <div class="w3-row-padding w3-light-grey fullheight">
            <div class="w3-half fullheight" style={{ overflow: "scroll" }}>
              <EditorView
                data={data}
                update={data => this.setState({ data })}
              />
            </div>
            <div class="w3-half fullheight" style={{ overflow: "scroll" }}>
              <div class="w3-padding w3-white">
                <BulletinView data={data} />
              </div>
            </div>
          </div>
        </Page>
      );
    } else {
      // no data yet, show loader
      return (
        <Page title="Editor">
          <Loader />
        </Page>
      );
    }
  }
}
