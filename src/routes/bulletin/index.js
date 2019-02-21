import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page } from "../../components";
import BulletinView from "./bulletin-view";
import prefs from "../../data/prefs";

export default class Bulletin extends Component {
  state = {
    data: null,
    error: null
  };

  // gets called when this route is navigated to
  componentDidMount() {
    let unit = this.props.unit;
    // get data
    BulletinData.getBulletin(unit)
      .then(data => {
        this.addRecent(unit, data);
        this.setState({ data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ unit }, { data, error }) {
    if (data) {
      return (
        <Page title={data.settings.name}>
          <BulletinView data={data} />
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
}
