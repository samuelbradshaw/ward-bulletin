import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Page, Loader } from "../../components";
import BulletinView from "./bulletin-view";

export default class Bulletin extends Component {
  state = {
    data: null
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // get data
    BulletinData.getBulletinData(this.props.unit).then(data =>
      this.setState({ data })
    );
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ unit }, { data }) {
    if (data) {
      return (
        <Page title={data.unit}>
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
}
