import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page, Loader } from "../../components";
import BulletinView from "./bulletin-view";
import prefs from "../../data/prefs";

export default class Bulletin extends Component {
  state = {
    data: null
  };

  // gets called when this route is navigated to
  componentDidMount() {
    let unit = this.props.unit;
    // get data
    BulletinData.getBulletinData(unit).then(data => {
      this.addRecent(data);
      this.setState({ data });
    });
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ unit }, { data }) {
    if (data) {
      return (
        <Page title={data.name}>
          <BulletinView data={data} />
        </Page>
      );
    } else {
      // no data yet, show loader
      return (
        <Page title="Ward Bulletin">
          <Loader />
        </Page>
      );
    }
  }

  addRecent(data) {
    // add unit to recents
    let recents = prefs.get(prefs.recents) || [];
    // filter out this unit
    recents = recents.filter(unit => unit.id !== data.id);
    let { id, name } = data;
    recents.unshift({ id, name });
    prefs.set(prefs.recents, recents);
  }
}
