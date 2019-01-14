import { h, Component } from "preact";
import BulletinData from "../../data/bulletindata";
import { Loader, Page, Alert } from "../../components";
import WardList from "../../components/wardlist";

export default class Locate extends Component {
  state = {
    wards: null,
    geoLocationError: false
  };

  // gets called when this route is navigated to
  componentDidMount() {
    if ("geolocation" in navigator) {
      /* geolocation is available */

      // get location
      this.state.geoLocationError = false;
      navigator.geolocation.getCurrentPosition(
        position => {
          // get data
          this.getLocationData(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        // error
        error => {
          this.setState({ geoLocationError: true });
        }
      );
    }
  }

  getLocationData(lat, long) {
    let wards = BulletinData.getBulletinsAtLocation(lat, long).then(wards =>
      this.setState({ wards })
    );
  }

  render({}, { wards }) {
    let content;

    if (this.state.geoLocationError || !("geolocation" in navigator)) {
      /* geolocation IS NOT available */
      content = <Alert text="Unable to get current location" />;
    } else if (wards != undefined) {
      if (wards.length) {
        content = (
          <WardList wards={wards} message="Ward bulletins at this location" />
        );
      } else {
        // no wards
        content = (
          <Alert text="There are no ward bulletins available at your current location." />
        );
      }
    } else {
      // no data yet, show loader
      content = <Loader />;
    }
    return <Page title="Locate">{content}</Page>;
  }
}
