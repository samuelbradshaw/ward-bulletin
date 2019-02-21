import { h, Component } from "preact";
import BulletinData from "../../data/bulletindata";
import { Page, loader } from "../../components";
import BulletinView from "../bulletin/bulletin-view";
import EditorView from "./editor-view";
import prefs from "../../data/prefs";
import { logout } from "../../data/firebase";

export default class EditorMain extends Component {
  state = { data: null };
  undoStack = [];

  // gets called when this route is navigated to
  componentDidMount() {
    // get data
    let unit = this.props.unit;

    // look for cached draft
    let data = prefs.get(prefs.draftBulletin);
    if (data && prefs.get(prefs.draftId === unit)) {
      // use cached draft
      this.setState({ data });
    } else {
      // download bulletin
      BulletinData.getBulletin(unit)
        .then(data => {
          if (data.status) {
            // an error happened. return initial data
            data = BulletinData.getInitialData();
          }
          this.setState({ data });
          prefs.set(prefs.draftBulletin, data);
          prefs.set(prefs.draftId, unit);
        })
        .catch(function(error) {
          console.log("error:", error);
        });
    }
  }

  render({}, { data }) {
    if (data) {
      return (
        <Page title="Editor">
          <div class="fullheight" style={{ paddingBottom: "44px" }}>
            <div
              class="w3-row-padding w3-half fullheight w3-border"
              style={{ overflow: "auto" }}
            >
              <EditorView
                data={data}
                update={request => {
                  this.update(request);
                  this.undoStack.push(request);
                }}
                change={request => {
                  this.update(request);
                }}
              />
            </div>
            <div
              class="w3-hide-small w3-half w3-white fullheight"
              style={{ overflow: "auto" }}
            >
              <div class="w3-padding w3-white fullheight">
                <BulletinView data={data} />
              </div>
            </div>
            <Footer>
              <button
                onClick={e => {
                  this.undo();
                  e.stopPropagation();
                }}
                class={`w3-bar-item w3-btn ${
                  this.undoStack.length ? "" : "w3-disabled"
                }`}
              >
                <i class="icon-ccw" />
                Undo
              </button>
              <button
                onClick={e => {
                  this.publish();
                  e.stopPropagation();
                }}
                class="w3-bar-item w3-btn"
              >
                <i class="icon-upload-cloud" />
                Publish
              </button>
              <button
                onClick={e => {
                  logout();
                  e.stopPropagation();
                }}
                class="w3-bar-item w3-btn"
              >
                <i class="icon-logout" />
                Logout
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                }}
                class="w3-bar-item w3-btn"
              >
                <i class="icon-help-circled" />
                Help
              </button>
            </Footer>
          </div>
        </Page>
      );
    } else {
      // no data yet, show loader
      return (
        <Page title="Editor" showLoader={true} message="Downloading Bulletin" />
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
    const { type, index, section, attr, isSection } = request;
    let data = isSection ? this.state.data.sections : section.data;

    switch (type) {
      case "add":
        if (undo) {
          data.splice(index, 1);
        } else {
          data.splice(index, 0, request.item);
        }
        break;

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
    prefs.set(prefs.draftBulletin, data);
  }

  undo() {
    let request = this.undoStack.pop();
    if (!request) {
      return;
    }
    this.update(request, true);
  }

  publish() {
    loader.show("Publishing Bulletin");
    BulletinData.saveBulletin(this.props.unit, this.state.data)
      .then(response => {
        loader.hide();
      })
      .catch(error => {
        loader.hide();
      });
  }
}

const Footer = ({ children }) => (
  <header
    class=""
    style={{
      opacity: 0.9,
      position: "fixed",
      bottom: "0px",
      width: "100%",
      opacity: ".9",
      left: "0px"
    }}
  >
    <div
      class="w3-bar w3-content w3-theme-d2 w3-display-container"
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      {children}
    </div>
  </header>
);
