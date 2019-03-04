import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page, Modal, showModal, Footer } from "../../components";
import BulletinView from "./bulletin-view";
import prefs from "../../data/prefs";
import Settings from "./settings";
import platform from "mini-platform-detect";

export default class Bulletin extends Component {
  state = {
    data: null,
    error: null,
    showInstallMessage: false
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
          this.setState({ showInstallMessage: true });
          prefs.set(prefs.homeScreenPromptTime, Date.now());
        }
      }
    }
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ unit }, { data, error }) {
    if (data) {
      let rightControl = (
        <span class="w3-display-right">
          <button
            class="icon-cog w3-btn w3-large w3-padding-small"
            onClick={e => {
              showModal("settings-modal");
              e.stopPropagation();
            }}
          />
          <button
            class="icon-arrows-cw w3-btn w3-large w3-padding-small"
            onClick={e => {
              this.setState({ data: null });
              this.reload(unit);
              e.stopPropagation();
            }}
          />
        </span>
      );
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
                onClick={e => this.setState({ showInstallMessage: false })}
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
        setTimeout(() => this.setState({ showInstallMessage: false }), 30000);
      }
      return (
        <Page title={data.settings.name} rightControl={rightControl}>
          <BulletinView data={data} />
          {installPrompt}
          <Modal id="settings-modal">
            <Settings update={() => this.setState({ data })} />
          </Modal>
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
    if (unit === "demoward") {
      return; // don't add demo ward to recents
    }
    // add unit to recents
    let recents = prefs.get(prefs.recents) || [];
    // filter out this unit
    recents = recents.filter(item => item.id !== unit);
    recents.unshift({ id: unit, name: data.settings.name });
    prefs.set(prefs.recents, recents);
  }

  reload(unit) {
    let today = new Date().toLocaleDateString();
    BulletinData.getBulletin(unit)
      .then(data => {
        this.addRecent(unit, data);
        this.setState({ data });
        // cache
        prefs.set(prefs.cacheBulletin, data);
        prefs.set(prefs.cacheDate, today);
        prefs.set(prefs.cacheId, unit);
      })
      .catch(error => {
        this.setState({ error });
      });
  }
}
