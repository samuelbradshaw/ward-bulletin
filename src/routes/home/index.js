import { h, Component } from "preact";
import { route } from "preact-router";
import { Page, Modal, showModal } from "../../components";
import prefs from "../../data/prefs";
import Bulletin from "../bulletin";
import style from "./style";
import Settings from "./settings";

const Home = () => {
  let hash = location.hash;
  if (hash.startsWith("#")) {
    // if url path is /#:unit, show bulletin
    let unit = hash.replace("#", "");
    return <Bulletin unit={unit} />;
  }

  // if bulletin is cached and url is not /home, show bulletin
  let unit = prefs.get(prefs.cacheId);
  if (unit && prefs.get(prefs.cacheBulletin) && location.pathname !== "/home") {
    return <Bulletin unit={unit} />;
  }

  let recents = prefs.get(prefs.recents);

  let sidebarItems = [
    {
      title: "Settings",
      icon: "icon-cog",
      action: () => showModal("settings-modal")
    }
  ];

  return (
    <Page title="Ward Bulletin App" sidebarItems={sidebarItems}>
      <div
        class="w3-light-grey w3-container"
        style={{ paddingBottom: "300px" }}
      >
        <h5 class={style.h5}>Find Ward Bulletin</h5>
        <div class="w3-card w3-container w3-white w3-round">
          <p>
            View your bulletin by using your current location to find the
            closest bulletins or search using the name of your ward.
          </p>
          <div class="w3-section">
            <button
              class="w3-btn w3-theme w3-round w3-border"
              onClick={() => route("/locate")}
            >
              Find by Location
            </button>
          </div>
          <div class="w3-section">
            <button
              class="w3-btn w3-theme w3-round w3-border"
              onClick={() => route("/search")}
            >
              Search by Name
            </button>
          </div>
        </div>

        {recents.length > 0 && (
          <div>
            <h5>Recent Ward Bulletins</h5>
            <div class="w3-card w3-container w3-white w3-round">
              <ul class="w3-ul w3-margin-bottom">
                {recents.map(ward => (
                  <div class="w3-quarter w3-section">
                    <span
                      class="w3-btn w3-border-bottom w3-border-theme"
                      style={{ padding: 0 }}
                      onClick={() => route(`/#${ward.id}`)}
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
        <div class="w3-card w3-container w3-white w3-round">
          <p>
            If you are a bulletin editor for your ward, login or create a new
            account to edit your ward bulletin.
          </p>
          <button
            class="w3-btn w3-theme w3-round w3-border"
            onClick={() => route("/editor")}
          >
            Edit Bulletin
          </button>
          <p />
        </div>

        <h5>About Ward Bulletin</h5>
        <div class="w3-card w3-container w3-white w3-round">
          <p>
            The Ward Bulletin App is provided as a free service to ward and
            stake bulletin editors and members of The Church of Jesus Christ of
            Latter-day Saints. It is not an official app of the Church.
          </p>
          <p>
            If you have questions about the app, suggestions, or need to report
            a problem, please send email to: wardbulletinapp@gmail.com.
          </p>
          <button
            class="w3-btn w3-theme w3-round w3-border"
            onClick={() =>
              (window.location = "mailto:wardbulletinapp@gmail.com")
            }
          >
            Send Us Email
          </button>
          <p>See a sample ward bulletin:</p>

          <div class="w3-section">
            <button
              class="w3-btn w3-theme w3-round w3-border"
              onClick={() => route("/#sampleward")}
            >
              View Sample Bulletin
            </button>
          </div>
          <div class="w3-section">
            <button
              class="w3-btn w3-theme w3-round w3-border"
              onClick={() => route("/editdemo")}
            >
              Edit Sample Bulletin
            </button>
          </div>

          <p />
          <small class="w3-right w3-text-grey">
            Copyright &copy; 2019 by Alan Bird
          </small>
          <p />
          <br />
        </div>
      </div>

      <Modal id="settings-modal">
        <Settings update={() => this.setState({ data })} />
      </Modal>
    </Page>
  );
};

export default Home;
