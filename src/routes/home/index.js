import { h } from "preact";
import { Page } from "../../components";

const Home = () => (
  <Page title="Ward Bulletin App">
    <div class="w3-container w3-light-grey fullheight">
      <Card
        text='Find your ward bulletin based on your current location. Tap the "Locate" button if you are at your church building.'
        button="Locate"
        action="/locate"
      />
      <Card
        text='Find your ward bulletin by searching for your ward by name. Tap the "Search" button to enter your ward name.'
        button="Search"
        action="/search"
      />
      <Card
        text='If you are your ward bulletin editor, tap the "Edit" button to edit your ward bulletin or to create a new account for your ward.'
        button="Edit"
        action="/editor"
      />
    </div>
  </Page>
);

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
