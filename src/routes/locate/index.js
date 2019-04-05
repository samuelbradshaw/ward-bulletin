import { h, Component } from "preact";
import BulletinData from "../../data/bulletindata";
import { Page, Alert } from "../../components";
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
      this.state.geoLocationError = null;

      // !! test
      // this.getLocationData(32.9681155, -117.1398259);
      // return;

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
          this.setState({ geoLocationError: error });
        }
      );
    }
  }

  getLocationData(lat, long) {
    BulletinData.getBulletinsAtLocation(lat, long).then(wards =>
      this.setState({ wards })
    );
  }

  render({}, { wards }) {
    let content;
    let showLoader = false;

    let geoLocationError = this.state.geoLocationError;
    let error = geoLocationError
      ? `${geoLocationError.message} (${geoLocationError.code})`
      : !("geolocation" in navigator)
      ? "Geolocation not available on this device"
      : null;
    if (error) {
      /* geolocation IS NOT available */
      content = (
        <Alert text={`Unable to get current location: ${error.toString()}`} />
      );
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
      showLoader = true;
    }
    return (
      <Page title="Locate" showLoader={showLoader} message="Locating Bulletin">
        <div class="w3-content">{content}</div>
      </Page>
    );
  }
}
