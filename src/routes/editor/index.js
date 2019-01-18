import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page, Loader } from "../../components";
import BulletinView from "../bulletin/bulletin-view";
import EditorView from "./editor-view";

export default class Editor extends Component {
  unit = "pq3";
  state = { data: null };
  undoStack = [];

  // gets called when this route is navigated to
  componentDidMount() {
    // get data
    let data = localStorage.getItem("current-draft");
    if (data) {
      // use current draft
      this.setState({ data: JSON.parse(data) });
    } else {
      BulletinData.getBulletinData(this.unit).then(data => {
        this.setState({ data });
        localStorage.setItem("current-draft", JSON.stringify(data));
      });
    }
  }

  render({}, { data }) {
    if (data) {
      return (
        <Page title="Editor">
          <div
            class="w3-light-grey fullheight"
            style={{ paddingBottom: "44px" }}
          >
            <div
              class="w3-row-padding w3-half fullheight"
              style={{ overflow: "auto" }}
            >
              <EditorView
                data={data}
                update={request => {
                  this.update(request);
                  this.undoStack.push(request);
                }}
              />
            </div>
            <div
              class="w3-hide-small w3-half fullheight"
              style={{ overflow: "auto" }}
            >
              <div class="w3-padding w3-white fullheight">
                <BulletinView data={data} />
              </div>
            </div>
          </div>
          <div
            class="footer w3-bar w3-theme-d1  w3-half"
            style={{
              display: "flex",
              justifyContent: "space-around",
              position: "fixed",
              bottom: "0",
              opacity: ".9"
            }}
          >
            <button
              onClick={e => {
                this.undo();
                e.stopPropagation();
              }}
              class={`w3-bar-item w3-button ${
                this.undoStack.length ? "" : "w3-disabled"
              }`}
            >
              <i class="icon-ccw" />
              Undo
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
              }}
              class="w3-bar-item w3-button"
            >
              <i class="icon-upload-cloud" />
              Publish
            </button>
            <button
              onClick={e => {
                e.stopPropagation();
              }}
              class="w3-bar-item w3-button"
            >
              <i class="icon-help-circled" />
              Help
            </button>
          </div>{" "}
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

  update(request, undo = false) {
    if (Array.isArray(request)) {
      for (let thisRequest of request) {
        // multiple requests
        this.updateRequest(thisRequest, undo);
      }
    } else {
      this.updateRequest(request, undo);
    }
  }

  updateRequest(request, undo = false) {
    const { type, index, sectionId, attr } = request;
    let data = this.state.data.sections[sectionId].data;

    switch (type) {
      case "update":
        const item = data[index];
        if (undo) {
          item[attr] = request.oldValue;
        } else {
          request.oldValue = item[attr];
          item[attr] = request.value;
        }
        break;

      case "moveUp":
        if (undo) {
          data.splice(index, 0, data.splice(index - 1, 1)[0]);
        } else {
          data.splice(index - 1, 0, data.splice(index, 1)[0]);
        }
        break;

      case "moveDown":
        if (undo) {
          data.splice(index, 0, data.splice(index + 1, 1)[0]);
        } else {
          data.splice(index + 1, 0, data.splice(index, 1)[0]);
        }
        break;

      case "delete":
        if (undo) {
          data.splice(index, 0, request.oldValue);
        } else {
          const item = data[index];
          request.oldValue = item;
          data.splice(index, 1);
        }
        break;
    }

    data = this.state.data;
    this.setState(data);

    // save in local storage
    localStorage.setItem("current-draft", JSON.stringify(data));
  }

  undo() {
    let request = this.undoStack.pop();
    if (!request) {
      return;
    }
    this.update(request, true);
  }
}
