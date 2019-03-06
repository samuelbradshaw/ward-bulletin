import { h, Component } from "preact";
import prefs from "../../data/prefs";
import { loader } from "../../components";
import style from "./style";

class MediaLibrary extends Component {
  cache = {};
  stack = [];
  state = { mediaData: [], title: "Media Library" };

  componentDidMount() {
    // fetch top level of media catalog
    this.getCollection("images:eng", "Media Library");
  }

  render({}, {}) {
    return (
      <div class="w3-display-container">
        <h5 class="w3-center">{this.state.title}</h5>
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
            {this.state.mediaData.map(item => {
              if (item.type === "image") {
                return (
                  <div
                    class="w3-padding"
                    onClick={e => {
                      this.props.select(item);
                      e.stopPropagation();
                    }}
                  >
                    <img
                      key={item.thumb}
                      src={item.thumb}
                      class={style.assetImage}
                    />
                  </div>
                );
              } else if (item.type === "folder") {
                return (
                  <div
                    class="w3-padding"
                    onClick={e => {
                      this.stack.push({
                        title: item.title,
                        data: this.state.mediaData
                      });
                      this.getCollection(item.id, item.title);
                      e.stopPropagation();
                    }}
                  >
                    <img
                      src={item.thumb}
                      key={item.thumb}
                      class={"w3-card " + style.folderImage}
                    />
                    <div class={"w3-small " + style.folderTitle}>
                      {item.title}
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

  getCollection(id, title) {
    this.fetchMediaData(id).then(mediaData => {
      this.setState({ mediaData, title });
    });
  }

  fetchMediaData(collection) {
    let data = this.cache[collection];
    if (data) {
      // return cached data
      return Promise.resolve(data);
    }

    loader.show();
    const url = `assets/media-library/${collection}.json`;
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
      this.setState({ mediaData: item.data, title: item.title });
    }
  }
}

export default MediaLibrary;
