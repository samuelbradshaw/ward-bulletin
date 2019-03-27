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
import { route } from "preact-router";

export default class EditorMain extends Component {
  state = { data: null, update: 0 };
  undoStack = [];
  redoStack = [];
  scrollTimer = null;

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
      this.download(unit);
    }
  }

  render({ unit }, { data }) {
    if (data) {
      if (printCheck.printing) {
        // printing, just show bulletin view
        return <BulletinView data={data} />;
      }

      let sidebarItems = [
        {
          title: "Undo Edit",
          icon: "icon-ccw",
          action: () => this.undo(),
          disabled: !this.undoStack.length
        },
        {
          title: "Redo Edit",
          icon: "icon-cw",
          action: () => this.redo(),
          disabled: !this.redoStack.length
        },
        {
          title: "Publish",
          icon: "icon-upload-cloud",
          action: () => unit !== "sampleward" && this.publish(),
          disabled: unit === "sampleward"
        },
        {
          title: "Print",
          icon: "icon-print",
          action: () => window.print()
        },
        { divider: true },
        {
          title: "Help",
          icon: "icon-help",
          action: () => showModal("help-modal")
        },
        {
          title: "Settings",
          icon: "icon-cog",
          action: () => showModal("settings-modal")
        },
        {
          title: "Reload",
          icon: "icon-arrows-cw",
          action: () => {
            if (
              confirm(
                "Are you sure you want to download the most recent bulletin and overwrite any changes you might have made?"
              )
            ) {
              this.download(unit);
            }
          }
        },
        {
          title: "Logout",
          icon: "icon-logout",
          action: () => {
            if (confirm("Are you sure you want to log out?")) {
              logout();
            }
          }
        }
      ];

      return (
        <Page title={data.settings.name} sidebarItems={sidebarItems}>
          <div class="fullheight">
            <div
              class="w3-row-padding w3-half fullheight w3-border"
              style={{ overflow: "auto" }}
              onScroll={e => this.handleScroll(e.target)}
            >
              <EditorView
                data={data}
                update={request => {
                  this.update(request);
                  this.undoStack.push(request);
                  this.redoStack.length = 0;
                }}
                change={request => {
                  this.update(request);
                }}
              />
            </div>
            <div
              id="bulletin-scroller"
              class="w3-hide-small w3-half w3-white fullheight"
              style={{ overflow: "auto" }}
            >
              <div class="w3-padding w3-white fullheight">
                <BulletinView data={data} hideSections />
              </div>
            </div>
          </div>

          <Modal id="help-modal">
            <Help />
          </Modal>

          <Modal id="settings-modal">
            <Settings
              settings={data.settings}
              update={() => {
                this.setState({ update: 0 });
                this.save();
              }}
              bulletin={data}
            />
          </Modal>
        </Page>
      );
    } else {
      // no data yet, show loader
      return (
        <Page
          title="Editor"
          showLoader={true}
          message="Downloading Bulletin"
          goBack
        />
      );
    }
  }

  handleScroll(scroller) {
    // get cached scroll data
    let data = this.scrollData;
    if (!data) {
      // get scroll info
      data = {
        editorItems: document.querySelectorAll(".editor-item"),
        bulletinItems: document.querySelectorAll(".bulletin-item"),
        bulletinScroller: document.getElementById("bulletin-scroller")
      };
      this.scrollData = data;
    }

    let { editorItems, bulletinItems, bulletinScroller } = data;

    // find edit item at that offset
    let offset = scroller.scrollTop;
    let index = -1;
    for (let i = 0; i < editorItems.length; i++) {
      let { offsetTop, clientHeight } = editorItems[i];
      if (offset >= offsetTop && offset <= offsetTop + clientHeight + 10) {
        index = i;
      }
    }
    if (index === -1) {
      return; // not found, shouldn't happen
    }
    let item = editorItems[index];
    let itemPercent = (offset - item.offsetTop) / (item.clientHeight + 10);
    let bulletinItem = bulletinItems[index];
    let bulletinOffset =
      bulletinItem.offsetTop + itemPercent * bulletinItem.clientHeight;

    // scroll bulletin item to offset
    bulletinScroller.scrollTo(0, bulletinOffset);

    // clear scroll data after 2 seconds of no scrolling
    clearTimeout(this.scrollTimer);
    this.scrollTimer = setTimeout(() => (this.scrollData = null), 2000);
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
    this.save();
  }

  download(unit) {
    loader.show("Downloading Bulletin");
    BulletinData.getBulletin(unit)
      .then(data => {
        loader.hide();
        this.setState({ data });
        if (!this.props.editdemo) {
          prefs.set(prefs.draftBulletin, data);
          prefs.set(prefs.draftId, unit);
        }
      })
      .catch(error => {
        loader.hide();
        // an error happened
        if (error.status === 403) {
          // not found. use initial data
          let data = BulletinData.getInitialData();
          this.setState({ data });
          if (!this.props.editdemo) {
            prefs.set(prefs.draftBulletin, data);
            prefs.set(prefs.draftId, unit);
          }
        } else {
          alert(`Error: ${error.message}`);
        }
      });
  }

  save() {
    // save in local storage
    prefs.set(prefs.draftBulletin, this.state.data);
  }

  undo() {
    this.undoRedo(this.undoStack, this.redoStack, true);
  }

  redo() {
    this.undoRedo(this.redoStack, this.undoStack, false);
  }

  undoRedo(fromStack, toStack, isUndo) {
    let request = fromStack.pop();
    if (!request) {
      return;
    }
    this.update(request, isUndo);
    toStack.push(request);
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
