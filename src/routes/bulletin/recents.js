import { h, Component } from "preact";
import BulletinData from "../../data/bulletindata";
import { Page } from "../../components";
import { format } from "util";

class Recents extends Component {
  state = {
    recents: null
  };
  unit;

  componentDidMount() {
    this.getRecents();
  }

  componentDidUpdate() {
    this.getRecents();
  }

  render({ select, unit }, { recents }) {
    if (unit !== this.unit) {
      // different unit
      recents = null;
    }
    this.unit = unit;

    const gotRecents = recents !== null;
    let showLoader = !gotRecents;
    let content;

    if (gotRecents) {
      if (recents.length) {
        content = (
          <ul class="w3-ul">
            {recents.map(recent => (
              <li style={{ cursor: "pointer" }} onClick={e => select(recent)}>
                {formatDate(recent)}
              </li>
            ))}
          </ul>
        );
      } else {
        content = "No recent bulletins";
      }
    }

    return (
      <Page
        title="Recent Bulletins"
        showLoader={showLoader}
        message="Getting recent bulletin list"
      >
        <h4>Recent Bulletins</h4>
        <div class="w3-card w3-container">{content}</div>
        <p />
      </Page>
    );
  }

  getRecents() {
    if (!this.state.recents) {
      BulletinData.getRecents(this.props.unit).then(recents => {
        recents.sort().reverse();
        this.setState({ recents });
      });
    }
  }
}

function formatDate(dateString) {
  let parts = dateString.split("-");
  let date = new Date(parts[0], parts[1] - 1, parts[2]);
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

export default Recents;
