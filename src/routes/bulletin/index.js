import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page } from "../../components";
import BulletinView from "./bulletin-view";
import prefs from "../../data/prefs";
import Settings from "./settings";

export default class Bulletin extends Component {
  state = {
    data: null,
    error: null
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
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ unit }, { data, error }) {
    if (data) {
      let rightControl = (
        <span class="w3-display-right">
          <button
            class="icon-cog w3-btn"
            onClick={e => {
              document.getElementById("settings-modal").style.display = "block";
              e.stopPropagation();
            }}
          />
          <button
            class="icon-arrows-cw w3-btn"
            onClick={e => {
              this.setState({ data: null });
              this.reload(unit);
              e.stopPropagation();
            }}
          />
        </span>
      );
      return (
        <Page title={data.settings.name} rightControl={rightControl}>
          <BulletinView data={data} />
          <div id="settings-modal" class="w3-modal">
            <div class="w3-modal-content w3-animate-top w3-card-4  w3-round">
              <div class="w3-container">
                <Settings update={() => this.setState({ data })} />
                <p />
              </div>
            </div>
          </div>
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
