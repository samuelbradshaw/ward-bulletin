import { h, Component } from "preact";
import prefs from "../../data/prefs";
import { loader } from "../../components";
import style from "./style";

class MediaLibrary extends Component {
  cache = {};
  stack = [];
  state = { mediaData: null };

  componentDidMount() {
    if (!this.state.mediaData) {
      // fetch top level of media catalog
      this.getCollection("images");
    }
  }

  render({}, { mediaData }) {
    return (
      <div class="w3-display-container">
        <h5 class="w3-center">
          {mediaData ? mediaData.name : "Media Library"}
        </h5>
        {this.stack.length ? (
          <button
            class="icon-left-open w3-display-topleft w3-btn"
            onClick={e => {
              this.goBack();
              e.stopPropagation();
            }}
          />
        ) : null}
        <div class="w3-card">
          <div class={style.mediaContainer}>
            {mediaData &&
              mediaData.items.map(item => {
                if ("thumbnail" in item) {
                  return (
                    <div
                      class={style.paddingImages}
                      onClick={e => {
                        this.props.select(item);
                        e.stopPropagation();
                      }}
                    >
                      <img
                        key={item.thumbnail}
                        src={item.thumbnail}
                        class={style.assetImage}
                      />
                    </div>
                  );
                } else if ("id" in item) {
                  return (
                    <div
                      class="w3-padding"
                      onClick={e => {
                        this.stack.push({
                          data: this.state.mediaData
                        });
                        this.getCollection(item.id);
                        e.stopPropagation();
                      }}
                    >
                      <img
                        src={item.image}
                        key={item.image}
                        class={"w3-card " + style.folderImage}
                      />
                      <div class={"w3-small " + style.folderTitle}>
                        {item.name}
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    );
  }

  getCollection(id) {
    this.fetchMediaData(id).then(mediaData => {
      this.setState({ mediaData });
    });
  }

  fetchMediaData(collection) {
    let data = this.cache[collection];
    if (data) {
      // return cached data
      return Promise.resolve(data);
    }

    loader.show();
    const url = `https://ward-bulletin-media-library.firebaseapp.com/${collection}.json`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        loader.hide();
        this.cache[collection] = data;
        return data;
      })
      .catch(error => {
        this.error = error;
        loader.hide();
        console.log("Error:", error);
      });
  }

  goBack() {
    if (this.stack.length) {
      let item = this.stack.pop();
      this.setState({ mediaData: item.data });
    }
  }
}

export default MediaLibrary;
