import { h } from "preact";
import Sidebar, { toggleSidebar, closeSidebar } from "./sidebar";
import style from "./style";

const Loader = ({ showLoader, message }) => {
  return (
    <div
      id="page-loader"
      class={
        "w3-modal w3-animate-opacity" + (showLoader ? " w3-show" : " w3-hide")
      }
    >
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

const Modal = ({ close, children }) => {
  let id = "modal" + Math.floor(Math.random() * 1000000);
  return (
    <div
      id={id}
      class="w3-modal w3-show"
      onClick={e => {
        if (e.target.id === id) {
          close();
        }
        e.stopPropagation();
      }}
    >
      <div class="w3-modal-content w3-animate-top w3-card-4 w3-round">
        <div class="w3-container">
          <span
            onClick={e => {
              close();
              e.stopPropagation();
            }}
            class="icon-cancel-circled w3-large w3-btn w3-display-topright"
            style={{ zIndex: 5 }}
          />

          {children}
          <p />
        </div>
      </div>
    </div>
  );
};

const Header = ({ title, goBack, showBack, showMenu }) => {
  return (
    <header
      class=""
      style={{
        opacity: 0.9,
        position: "fixed",
        top: "0px",
        width: "100%",
        height: "44px",
        zIndex: 10
      }}
    >
      <div
        class="w3-bar w3-theme-d2 w3-display-container"
        style={{ height: "44px" }}
      >
        {showBack && (
          <span class="w3-display-left">
            <button
              class="icon-left-open w3-btn"
              onClick={() => {
                if (goBack) {
                  history.back();
                } else {
                  location.replace("/home");
                }
              }}
            />
          </span>
        )}
        <h3 class="w3-center" style={{ margin: 0, marginTop: 4 }}>
          {title}
        </h3>
        {showMenu && (
          <span class="w3-display-right">
            <button class="icon-menu w3-btn" onClick={toggleSidebar} />
          </span>
        )}
      </div>
    </header>
  );
};

const Footer = ({ children }) => (
  <footer
    class=""
    style={{
      opacity: 0.9,
      position: "fixed",
      bottom: "0px",
      width: "100%",
      opacity: ".9",
      left: "0px"
    }}
  >
    <div
      class="w3-bar w3-theme-d2 w3-display-container"
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      {children}
    </div>
  </footer>
);

const Page = ({
  title,
  children,
  showLoader,
  message,
  goBack,
  isHome,
  sidebarItems
}) => {
  return (
    <div class="fullheight" style={{ paddingTop: "44px" }}>
      <Header
        title={title}
        goBack={goBack}
        showBack={!isHome}
        showMenu={Boolean(sidebarItems)}
      />
      {sidebarItems && <Sidebar items={sidebarItems} />}
      <div
        id="sidebarOverlay"
        class="w3-overlay w3-animate-opacity"
        onClick={closeSidebar}
        style="cursor:pointer"
      />
      <div class="fullheight w3-display-container">{children}</div>
      <Loader showLoader={showLoader} message={message} />
    </div>
  );
};

const Alert = ({ text }) => (
  <div class="w3-padding-large">
    <div class="w3-panel w3-pale-yellow w3-padding-large">{text}</div>
  </div>
);

function PopupMenu({ title, items, menuId, handler, isButton }) {
  menuId = menuId || "menu" + Math.floor(Math.random() * 1000000);
  let className = `w3-dropdown-click w3-border-theme w3-round w3-border`;
  return (
    <div class={className} style={{ padding: "4px 0px 4px 8px" }}>
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
          if (title === "-") {
            return <hr />;
          }
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
      <span>{title}</span>
    </button>
  );
}

let RadioButtons = ({ items, selected, select }) => {
  let sel = "icon-dot-circled w3-large";
  let unsel = "icon-circle-empty w3-large";
  let buttons = items.map((item, index) => (
    <span
      class="w3-text-theme w3-padding-small"
      onClick={e => {
        select(index);
        e.stopPropagation();
      }}
    >
      <i class={index === selected ? sel : unsel} />
      {item}
    </span>
  ));
  return <div>{buttons}</div>;
};

let CheckBox = ({ title, checked, onChange }) => (
  <p>
    <input
      class="w3-check"
      type="checkbox"
      checked={checked}
      onChange={e => {
        onChange(e.target.checked);
        e.stopPropagation();
      }}
    />
    <label>{title}</label>
  </p>
);

let TextInput = ({ title, ...rest }) => {
  return (
    <input
      class={`${
        style.textinput
        } w3-border w3-border-theme w3-round bottommargin`}
      type="text"
      value={title}
      {...rest}
    />
  );
};

let NumberInput = ({ title, postscript, onChange, height, ...rest }) => {
  return (
    <div>
      {title && <label style={{ marginRight: 6 }}>{title}</label>}
      <input
        class={"w3-border w3-border-theme w3-round"}
        style={{ width: 56, textAlign: "right", height: height }}
        type="number"
        {...rest}
        onChange={e => {
          onChange(parseFloat(e.target.value));
        }}
      />
      {postscript && <label style={{ marginLeft: 6 }}>{postscript}</label>}
    </div>
  );
};

let Label = ({ name }) => (
  <label class={`${style.label} w3-block`}>{name}</label>
);

let Button = ({ danger, children, ...rest }) => (
  <button {...rest} class={`w3-btn ${danger ? "w3-red" : "w3-theme"} w3-round w3-border`}>
    {children}
  </button>
);

function toggleMenu(menuId) {
  var menu = document.getElementById(menuId);
  if (menu.className.indexOf("w3-show") == -1) {
    menu.className += " w3-show";
  } else {
    menu.className = menu.className.replace(" w3-show", "");
  }
}

function showLoader(show, text) {
  let loader = document.getElementById("page-loader");
  if (show) {
    loader.classList.remove("w3-hide");
    loader.style.display = "block";
  }
  else {
    loader.classList.add("w3-hide");
  }
  document.getElementById("loader-message-container").style.display = text
    ? "block"
    : "none";
  document.getElementById("loader-message").textContent = text;
}

let loader = {
  show: text => showLoader(true, text),
  hide: () => showLoader(false)
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
  Footer,
  Page,
  Alert,
  PopupMenu,
  ToolbarButton,
  Loader,
  loader,
  toggleMenu,
  setThemeColor,
  Modal,
  RadioButtons,
  CheckBox,
  NumberInput,
  Label,
  TextInput,
  Button
};
