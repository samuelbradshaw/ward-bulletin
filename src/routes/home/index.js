import { h } from "preact";
import { Page } from "../../components";
import prefs from "../../data/prefs";

const Home = () => {
  let recents = prefs.get(prefs.recents);
  return (
    <Page title="Ward Bulletin App">
      <div class="fullheight w3-white w3-container">
        <h4>Welcome to the Ward Bulletin App</h4>
        <div class="w3-card w3-container w3-section">
          <p>
            View your bulletin by using your current location to find the
            closest bulletins or search using the name of your ward.
          </p>
          <div class="w3-margin">
            <button
              class="w3-btn w3-theme-d2 w3-round"
              onClick={() => (location.href = "/locate")}
            >
              Find by Location
            </button>
          </div>
          <div class="w3-margin">
            <button
              class="w3-btn w3-theme-d2 w3-round"
              onClick={() => (location.href = "/search")}
            >
              Search by Name
            </button>
          </div>
        </div>

        {recents && recents.length && (
          <div class="w3-card w3-container w3-section">
            <div class="w3-margin-top">Select a Recent Bulletin:</div>
            <ul class="w3-ul w3-margin-bottom">
              {recents.map(ward => (
                <li
                  class="w3-white w3-btn w3-round"
                  onClick={() => (location.href = `/${ward.id}`)}
                >
                  {ward.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div class="w3-card w3-container w3-section">
          <p>
            If you are a bulletin editor for your ward, login or create a new
            account to edit your ward bulletin.
          </p>
          <div class="w3-margin">
            <button
              class="w3-btn w3-theme-d2 w3-round"
              onClick={() => (location.href = "/editor")}
            >
              Edit Bulletin
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
};

const Card = ({ text, button, action }) => (
  <div class="w3-card w3-white w3-margin-top">
    <div class="w3-container">
      <h4>{button}</h4>
      <p>{text}</p>
      <a href={action} class="w3-btn w3-theme w3-margin-bottom">
        {button}
      </a>
    </div>
  </div>
);

export default Home;
