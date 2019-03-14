import { h, Component } from "preact";
import BulletinData from "../../data/bulletindata";
import { Page, loader, Modal, showModal, Footer } from "../../components";
import BulletinView from "../bulletin/bulletin-view";
import EditorView from "./editor-view";
import prefs from "../../data/prefs";
import { logout } from "../../data/firebase";
import Help from "./help";
import Settings from "./settings";
import firebase from "../../data/firebase";
import printCheck from "../../misc/print-check";

export default class EditorMain extends Component {
  state = { data: null, update: 0 };
  undoStack = [];

  // gets called when this route is navigated to
  componentDidMount() {
    // get data
    let unit = this.props.unit;

    // look for cached draft
    let data = prefs.get(prefs.draftBulletin);
    if (data && prefs.get(prefs.draftId) === unit) {
      // use cached draft
      this.setState({ data });
    } else {
      // download bulletin
      BulletinData.getBulletin(unit)
        .then(data => {
          if (data.error) {
            // an error happened. return initial data
            data = BulletinData.getInitialData();
          }
          this.setState({ data });
          if (!this.props.editdemo) {
            prefs.set(prefs.draftBulletin, data);
            prefs.set(prefs.draftId, unit);
          }
        })
        .catch(function(error) {
          console.log("error:", error);
        });
    }
  }

  render({ unit }, { data }) {
    if (data) {
      if (printCheck.printing) {
        // printing, just show bulletin view
        return <BulletinView data={data} />;
      }

      let rightControl = (
        <span class="w3-display-right">
          <button
            title="settings"
            class="icon-cog w3-btn w3-large w3-padding-small"
            onClick={e => {
              showModal("settings-modal");
              e.stopPropagation();
            }}
          />
          <button
            name="Help"
            class="icon-help-circled w3-btn w3-large w3-padding-small"
            onClick={e => {
              showModal("help-modal");
              e.stopPropagation();
            }}
          />
        </span>
      );

      return (
        <Page title={data.settings.name} rightControl={rightControl}>
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
                title="Undo Edit"
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
                title="Upload Bulletin"
                onClick={e => {
                  this.publish();
                  e.stopPropagation();
                }}
                class={`w3-bar-item w3-btn ${
                  unit === "demoward" ? "w3-disabled" : ""
                }`}
              >
                <i class="icon-upload-cloud" />
                Publish
              </button>
              <button
                title="Upload Bulletin"
                onClick={e => {
                  window.print();
                  e.stopPropagation();
                }}
                class={`w3-bar-item w3-btn ${
                  unit === "demoward" ? "w3-disabled" : ""
                }`}
              >
                <i class="icon-print" />
                Print
              </button>
              <button
                title="Logout"
                onClick={e => {
                  logout();
                  e.stopPropagation();
                }}
                class="w3-bar-item w3-btn"
              >
                <i class="icon-logout" />
                Logout
              </button>
            </Footer>
          </div>

          <Modal id="help-modal">
            <Help />
          </Modal>

          <Modal id="settings-modal">
            <Settings
              update={() => {
                this.setState({ update: 0 });
              }}
              bulletin={data}
            />
          </Modal>
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
    firebase
      .auth()
      .currentUser.getIdToken()
      .then(token => {
        return BulletinData.saveBulletin(
          this.props.unit,
          this.state.data,
          token
        );
      })
      .then(response => {
        loader.hide();
        setTimeout(
          () =>
            alert(`The ${this.state.data.settings.name} bulletin is now live!`),
          10
        );
      })
      .catch(error => {
        loader.hide();
        alert("Error while publishing bulletin:", error);
      });
  }
}
