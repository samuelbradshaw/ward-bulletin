import { h } from "preact";
import { Page } from "../../components";
import prefs from "../../data/prefs";

const Home = () => {
  let recents = prefs.get(prefs.recents);
  return (
    <Page title="Ward Bulletin App">
      <ul class="w3-ul">
        <p class="w3-margin-left w3-large">Find Bulletin</p>
        <li class="w3-white" onClick={() => (location.href = "/locate")}>
          Find at Current Location
        </li>
        <li class="w3-white" onClick={() => (location.href = "/search")}>
          Search by Ward Name
        </li>
      </ul>

      {recents && recents.length && (
        <ul class="w3-ul">
          <p class="w3-margin-left w3-large">Recent Bulletins</p>
          {recents.map(ward => (
            <li
              class="w3-white"
              onClick={() => (location.href = `/${ward.id}`)}
            >
              {ward.name}
            </li>
          ))}
        </ul>
      )}

      <ul class="w3-ul">
        <p class="w3-margin-left w3-large">Bulletin Editor</p>
        <li class="w3-white" onClick={() => (location.href = "/editor")}>
          Edit
        </li>
      </ul>
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
