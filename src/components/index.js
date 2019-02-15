import { h } from "preact";

const Loader = ({ showLoader, message }) => {
  return (
    <div id="page-loader" class={"w3-modal" + (showLoader ? " w3-show" : "")}>
      <div class="w3-modal-content w3-transparent">
        <div
          id="loader-message-container"
          class="w3-center w3-margin-bottom w3-padding-32"
          style={{ display: message ? "block" : "none" }}
        >
          <span
            id="loader-message"
            class="w3-large w3-white w3-padding w3-opacity-min w3-round"
          >
            {message}
          </span>
        </div>
        <div class="loader w3-auto" />
      </div>
    </div>
  );
};

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

const Page = ({ title, children, showLoader, message }) => (
  <div class="fullheight" style={{ paddingTop: "56px" }}>
    <Header title={title} />
    <div class="w3-content fullheight">{children}</div>
    <Loader showLoader={showLoader} message={message} />
  </div>
);

const Alert = ({ text }) => (
  <div class="w3-padding-large">
    <div class="w3-panel w3-pale-yellow w3-padding-large">{text}</div>
  </div>
);

function PopupMenu({ title, items, menuId, handler, isButton }) {
  menuId = menuId || "menu" + Math.floor(Math.random() * 1000000);
  return (
    <div class="w3-dropdown-click">
      <div
        onClick={e => {
          toggleMenu(menuId);
          e.stopPropagation();
        }}
        class={isButton && "w3-bar-item w3-btn"}
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
              class="w3-bar-item w3-btn"
              onClick={e => {
                e.stopPropagation();
                handler(value, title);
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

function ToolbarButton({ title, icon, onClick, disabled }) {
  const classText = "w3-bar-item w3-btn" + (disabled ? " w3-disabled" : "");
  return (
    <button onClick={disabled ? null : onClick} class={classText}>
      <i class={icon} />
      {title}
    </button>
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

function showLoader(display, text) {
  document.getElementById("page-loader").style.display = display;
  document.getElementById("loader-message-container").style.display = text
    ? "block"
    : "none";
  document.getElementById("loader-message").textContent = text;
}

let loader = {
  show: text => showLoader("block", text),
  hide: () => showLoader("none")
};

function setThemeColor(color) {
  let href = `https://www.w3schools.com/lib/w3-theme-${color}.css`;
  let cssId = "myCss";
  let link = document.getElementById(cssId);
  if (!link) {
    let head = document.getElementsByTagName("head")[0];
    link = document.createElement("link");
    link.id = cssId;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "all";
    head.appendChild(link);
  }
  link.href = href;
}

export {
  Header,
  Page,
  Alert,
  PopupMenu,
  ToolbarButton,
  loader,
  toggleMenu,
  setThemeColor
};
