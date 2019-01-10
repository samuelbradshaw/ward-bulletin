import { h } from "preact";

const Loader = () => (
  <div class="fullheight w3-black w3-display-container w3-opacity-max">
    <div class="w3-display-middle">
      <i
        class="icon-spin4 w3-xxlarge animate-spin"
        style={{ lineHeight: "default" }}
      />
    </div>
  </div>
);

const Header = ({ title }) => (
  <header class="w3-top" style={{ opacity: 0.9 }}>
    <div class="w3-bar w3-content w3-theme-d2 w3-display-container">
      {location.pathname != "/" && (
        <button
          class="icon-left-open w3-display-left w3-btn"
          onClick={() => history.back()}
        />
      )}
      <h3 class="w3-center">{title}</h3>
    </div>
  </header>
);

const Page = ({ title, children }) => (
  <div class="fullheight">
    <Header title={title} />
    <div class={"pagecontent w3-content fullheight"}>{children}</div>
  </div>
);

export { Loader, Header, Page };
