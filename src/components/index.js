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
  <header
    class=""
    style={{
      opacity: 0.9,
      position: "fixed",
      top: "0px",
      width: "100%"
    }}
  >
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
  <div class="fullheight" style={{ paddingTop: "56px" }}>
    <Header title={title} />
    <div class="w3-content fullheight">{children}</div>
  </div>
);

const Alert = ({ text }) => (
  <div class="w3-padding-large">
    <div class="w3-panel w3-pale-yellow w3-padding-large">{text}</div>
  </div>
);

function PopupMenu({ title, menuId, items, handler, isButton }) {
  return (
    <div class="w3-dropdown-click">
      <div
        onClick={e => {
          toggleMenu(menuId);
          e.stopPropagation();
        }}
        class={isButton && "w3-bar-item w3-button"}
      >
        {title}
        <i class="icon-down-dir" />
      </div>
      <div
        id={menuId}
        class="w3-dropdown-content w3-bar-block w3-border"
        style={{ minWidth: 0 }}
      >
        {items.map(([title, value]) => {
          return (
            <a
              class="w3-bar-item w3-button"
              onClick={e => {
                e.stopPropagation();
                handler(value);
                toggleMenu(menuId);
              }}
            >
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function toggleMenu(menuId) {
  var addMenu = document.getElementById(menuId);
  if (addMenu.className.indexOf("w3-show") == -1) {
    addMenu.className += " w3-show";
  } else {
    addMenu.className = addMenu.className.replace(" w3-show", "");
  }
}

export { Loader, Header, Page, Alert, PopupMenu };
