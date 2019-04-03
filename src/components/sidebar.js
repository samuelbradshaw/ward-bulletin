import { h, Component } from "preact";
import { route } from "preact-router";

const Sidebar = ({ items }) => {
  return (
    <div
      class="w3-sidebar w3-bar-block w3-animate-right w3-theme-d2"
      style={{ display: "none", zIndex: 5, right: 0 }}
      id="mainSidebar"
    >
      <Divider />
      <button
        onClick={e => closeSidebar()}
        class="w3-center-align w3-btn w3-block"
      >
        Main Menu
      </button>
      <Divider />
      <SidebarItems items={items} />
    </div>
  );
}

class SidebarItems extends Component {
  state = {
    reload: false
  };

  constructor(props) {
    super(props);
    this.handleReload = this.handleReload.bind(this);
  }

  handleReload(e) {
    this.setState({ reload: true });
  }

  componentDidMount() {
    window.addEventListener("reload-sidebar", this.handleReload);
  }

  componentWillUnmount() {
    window.removeEventListener("reload-sidebar", this.handleReload);
  }

  render({ items }) {
    if (items instanceof Function) {
      items = items();
    }
    return (
      <div id="mainSidebarItems">
        {items.map(item => {
          if (item.divider) {
            return <Divider />;
          }
          return (
            <div>
              <button
                class={`w3-btn w3-block w3-left-align ${item.disabled &&
                  "w3-disabled"}`}
                onClick={e => {
                  closeSidebar();
                  item.action && item.action();
                }}
              >
                {item.icon && <i class={item.icon} />}
                {item.title}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

function Divider() {
  return <hr style={{ margin: 4 }} />;
}

function getStyle(id) {
  return document.getElementById(id).style;
}

function openSidebar() {
  window.dispatchEvent(new Event("reload-sidebar"));
  getStyle("mainSidebar").display = "block";
  getStyle("sidebarOverlay").display = "block";
}

function closeSidebar() {
  getStyle("mainSidebar").display = "none";
  getStyle("sidebarOverlay").display = "none";
}

function toggleSidebar() {
  getStyle("mainSidebar").display === "none" ? openSidebar() : closeSidebar();
}

export default Sidebar;
export { openSidebar, closeSidebar, toggleSidebar };
