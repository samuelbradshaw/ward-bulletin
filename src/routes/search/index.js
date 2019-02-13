import { h, Component } from "preact";
import BulletinData from "../../data/bulletindata";
import { Page, Alert } from "../../components";
import WardList from "../../components/wardlist";

export default class Search extends Component {
  state = {
    wards: null,
    searchWards: null,
    searchTerm: null,
    complete: false
  };

  getSearchData(searchTerm) {
    let wards = BulletinData.searchBulletins(searchTerm).then(wards =>
      this.setState({ wards })
    );
  }

  render({}, { wards }) {
    let content = (
      <div>
        <div class="w3-padding">
          <p class="w3-text-grey">Ward name:</p>
          <input
            class="w3-input w3-border w3-round"
            type="text"
            placeholder="Ward Name"
            onInput={event => this.updateSearch(event.target)}
          />
        </div>
        {this.state.wards && (
          <WardList wards={wards} message="Ward bulletins" />
        )}
      </div>
    );

    return <Page title="Search">{content}</Page>;
  }

  updateSearch(target) {
    let value = target.value.toLowerCase();
    let { searchWards, searchTerm, complete } = this.state;
    if (value.length >= 3) {
      if (searchWards && complete && value.startsWith(searchTerm)) {
        // filter existing wards
        let wards = searchWards.filter(ward =>
          ward.name.toLowerCase().startsWith(value)
        );
        this.setState({ wards });
      } else {
        // need to search for ward list
        BulletinData.searchBulletins(value).then(({ wards, complete }) =>
          this.setState({
            wards,
            searchWards: wards,
            searchTerm: value,
            complete
          })
        );
      }
    } else {
      // wait for at least 3 characters
      this.setState({ wards: null, searchWards: null, searchTerm: null });
    }
  }
}
