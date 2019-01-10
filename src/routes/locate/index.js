import { h, Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import { Loader, Page } from "../../components";

export default class Locate extends Component {
  state = {
    wards: null
  };

  // gets called when this route is navigated to
  async componentDidMount() {
    // get data
    const long = 0;
    const lat = 0;
    let wards = await BulletinData.getBulletinsAtLocation(long, lat);
    this.setState({ wards });
  }

  render({}, { wards }) {
    let content;

    if (wards != undefined) {
      if (wards.length) {
        content = (
          <div class="pagecontent w3-container">
            <p class="w3-text-grey">Ward bulletins at this location</p>
            <ul class="w3-ul">
              {wards.map(ward => (
                <li class="w3-white w3-ripple" onClick={() => selectWard(ward)}>
                  {ward.name}
                </li>
              ))}
            </ul>
          </div>
        );
      } else {
        // no wards
        content = (
          <div class="w3-display-middle w3-white w3-card w3-container">
            <p>
              There are no ward bulletins available at your current location.
            </p>
          </div>
        );
      }
    } else {
      // no data yet, show loader
      content = <Loader />;
    }
    return (
      <Page title="Locate">
        <div class="fullheight w3-display-container w3-content w3-light-gray">
          {content}
        </div>
      </Page>
    );
  }
}

function selectWard(ward) {
  console.log("Selected ward: ", ward);
  window.location.href = `/bulletin/${ward.id}`;
}
