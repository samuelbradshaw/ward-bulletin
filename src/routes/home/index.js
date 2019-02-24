import { h, Component } from "preact";
import { route } from "preact-router";
import { Page } from "../../components";
import prefs from "../../data/prefs";
import Bulletin from "../bulletin";

const Home = () => {
  let hash = location.hash;
  if (hash.startsWith("#")) {
    // if url path is /#/:unit, show bulletin
    let unit = hash.replace("#/", "");
    return <Bulletin unit={unit} />;
  }

  let recents = prefs.get(prefs.recents);
  return (
    <Page title="Ward Bulletin App">
      <div class="w3-white w3-container" style={{ paddingBottom: "300px" }}>
        <h5>Find Ward Bulletin</h5>
        <div class="w3-card w3-container">
          <p>
            View your bulletin by using your current location to find the
            closest bulletins or search using the name of your ward.
          </p>
          <div class="w3-row">
            <div class="w3-quarter w3-section w3-center">
              <button
                class="w3-btn w3-border-theme w3-round w3-border"
                onClick={() => route("/locate")}
              >
                Find by Location
              </button>
            </div>
            <div class="w3-quarter w3-section w3-center">
              <button
                class="w3-btn w3-border-theme w3-round w3-border"
                onClick={() => route("/search")}
              >
                Search by Name
              </button>
            </div>
          </div>
        </div>

        {recents && recents.length && (
          <div>
            <h5>Recent Ward Bulletins</h5>
            <div class="w3-card w3-container">
              <ul class="w3-ul w3-margin-bottom">
                {recents.map(ward => (
                  <div class="w3-quarter w3-section w3-center">
                    <span
                      class="w3-btn w3-border-bottom w3-border-theme"
                      style={{ padding: 0 }}
                      onClick={() => route(`/#/${ward.id}`)}
                    >
                      {ward.name}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}

        <h5>Edit Ward Bulletin</h5>
        <div class="w3-card w3-container">
          <p>
            If you are a bulletin editor for your ward, login or create a new
            account to edit your ward bulletin.
          </p>
          <div class="w3-quarter w3-section w3-center">
            <button
              class="w3-btn w3-border-theme w3-round w3-border"
              onClick={() => route("/editor")}
            >
              Edit Bulletin
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
