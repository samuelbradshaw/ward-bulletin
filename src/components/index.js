import { h } from "preact";

const Loader = () => (
  <div
    class="fullheight  w3-display-container"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <span class="w3-dark-grey w3-opacity-min w3-padding w3-round">
        <i
          class="icon-spin4 w3-xxlarge animate-spin"
          style={{ lineHeight: "default" }}
        />
      </span>
    </div>
    <div />
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

const Alert = ({ text }) => (
  <div class="w3-padding-large">
    <div class="w3-panel w3-pale-yellow w3-padding-large">{text}</div>
  </div>
);

export { Loader, Header, Page, Alert };
