import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page, Modal, loader } from "../../components";
import BulletinView from "./bulletin-view";
import prefs from "../../data/prefs";
import Settings from "./settings";
import Recents from "./recents";
import Share from "./share";
import platform from "mini-platform-detect";
import printCheck from "../../misc/print-check";
import { route } from "preact-router";

export default class Bulletin extends Component {
  state = {
    data: null,
    error: null,
    showInstallMessage: false,
    modal: null
  };

  // gets called when this route is navigated to
  componentDidMount() {
    let unit = this.props.unit;

    // try for cached bulletin
    let data = prefs.get(prefs.cacheBulletin);
    let today = new Date().toLocaleDateString();
    if (
      data &&
      today === prefs.get(prefs.cacheDate) &&
      unit === prefs.get(prefs.cacheId)
    ) {
      // use cache
      this.setState({ data });
    } else {
      // get data
      this.reload(unit);
    }

    // see if we want to display prompt in Safari to add to home screen
    if (platform.safari && platform.ios) {
      const isInStandaloneMode =
        "standalone" in window.navigator && window.navigator.standalone;
      if (!isInStandaloneMode) {
        let promptTime = prefs.get(prefs.homeScreenPromptTime);
        let then = promptTime ? parseInt(promptTime) : 0;
        let now = Date.now();
        let days = (now - then) / 1000 / 60 / 60 / 24;
        if (days >= 0) {
          // let's prompt
          this.setState({
            showInstallMessage: true
          });
          prefs.set(prefs.homeScreenPromptTime, Date.now());
        }
      }
    }
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ unit }, { data, error, modal }) {
    if (data) {
      let installPrompt;
      let device = "device";
      if (this.state.showInstallMessage) {
        installPrompt = (
          <footer
            class="w3-pale-yellow w3-padding w3-card-4"
            style={{
              // opacity: 0.9,
              position: "fixed",
              bottom: "10px",
              width: "100%",
              left: "0px"
            }}
          >
            <div class="w3-panel">
              <span
                onClick={e =>
                  this.setState({
                    showInstallMessage: false
                  })
                }
                class="icon-cancel-circled w3-large w3-padding w3-display-topright"
              />
              <p>
                To install the Ward Bulletin app on your device, tap{" "}
                <img src="assets/images/share.svg" /> and then Add to Home
                Screen.
              </p>
            </div>
            <p />
          </footer>
        );
        setTimeout(
          () =>
            this.setState({
              showInstallMessage: false
            }),
          30000
        );
      }
      if (printCheck.printing) {
        // printing, just show bulletin view
        return <BulletinView data={data} />;
      }
      let sidebarItems = [
        {
          title: "Reload",
          icon: "icon-arrows-cw",
          action: () => this.reload(unit)
        },
        {
          title: "Recent Bulletins",
          icon: "icon-history",
          action: () => {
            this.setState({ modal: "recents" });
          }
        },
        { divider: true },
        {
          title: "Settings",
          icon: "icon-cog",
          action: () => this.setState({ modal: "settings" })
        },
        {
          title: "Share",
          icon: platform.ios || platform.macos ? "icon-export" : "icon-share",
          action: () => this.setState({ modal: "share" })
        }
      ];
      return (
        <Page title={data.settings.name} sidebarItems={sidebarItems}>
          <BulletinView data={data} />
          {installPrompt}
          {modal === "settings" && (
            <Modal close={() => this.setState({ modal: null })}>
              <Settings update={() => this.setState({ data })} />
            </Modal>
          )}
          {modal === "share" && (
            <Modal close={() => this.setState({ modal: null })}>
              <Share unit={unit} name={data.settings.name} />
            </Modal>
          )}
          {modal === "recents" && (
            <Modal close={() => this.setState({ modal: null })}>
              <Recents
                unit={this.props.unit}
                select={item => {
                  this.setState({ modal: null });
                  this.showRecent(unit, item);
                }}
              />
            </Modal>
          )}
        </Page>
      );
    } else if (error) {
      return (
        <Page title="Ward Bulletin">
          <div class="w3-panel w3-pale-red">
            <h4>Error</h4>
            <p>{error.toString()}</p>
          </div>
        </Page>
      );
    } else {
      // no data yet, show loader
      return (
        <Page
          title="Ward Bulletin"
          showLoader={true}
          message="Downloading Bulletin"
        />
      );
    }
  }

  addRecent(unit, data) {
    if (unit === "sampleward") {
      return; // don't add demo ward to recents
    }
    // add unit to recents
    let recents = prefs.get(prefs.recents);
    // filter out this unit
    recents = recents.filter(item => item.id !== unit);
    recents.unshift({
      id: unit,
      name: data.settings.name
    });
    prefs.set(prefs.recents, recents);
  }

  reload(unit) {
    loader.show();
    BulletinData.getBulletin(unit)
      .then(data => {
        this.addRecent(unit, data);
        this.setState({ data });
        // cache
        let today = new Date().toLocaleDateString();
        prefs.set(prefs.cacheBulletin, data);
        prefs.set(prefs.cacheDate, today);
        prefs.set(prefs.cacheId, unit);
        loader.hide();
      })
      .catch(error => {
        loader.hide();
        this.setState({ error: error.message });
      });
  }

  showRecent(unit, item) {
    loader.show();
    BulletinData.getRecent(unit, item)
      .then(data => {
        this.setState({ data });
        loader.hide();
      })
      .catch(error => {
        loader.hide();
        this.setState({ error: error.message });
      });
  }
}
