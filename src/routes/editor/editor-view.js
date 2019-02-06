import { h, Component } from "preact";
import style from "./style";
import hymnList from "../../assets/hymns";
import Dropdown from "../../components/Dropdown/Dropdown";

export default class EditorView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    // create hymns list
    this.hymns = { ...hymnList };
    this.state = { selectedItem: null, sectionId: null };
  }

  render({ data }) {
    let sections = [];
    for (let sectionId of data.sectionOrder) {
      let section = data.sections[sectionId];
      if (section) {
        sections.push(this.sectionTitle(section.title));
        let rows = [];
        for (let item of section.data) {
          const selected = item === this.state.selectedItem;
          if (selected) {
            // this row is selected
            let toolbar = this.itemToolBar(item, section, sectionId);
            rows.push(toolbar);
          }
          const index = section.data.indexOf(item);
          rows.push(this.createLine(item, index, sectionId, selected));
        }

        sections.push(<ul class="w3-ul">{rows}</ul>);
      }
    }
    return (
      <div
        id="keyhandler"
        onKeyDown={event => this.handleKeyEvent(event)}
        tabIndex="-1"
        style={{ outline: "none" }}
      >
        <div class="w3-content">{sections}</div>
      </div>
    );
  }

  handleKeyEvent(event) {
    if (event.target.id == "keyhandler") {
      let item = this.state.selectedItem;
      if (item) {
        const updateMap = {
          ArrowUp: "moveUp",
          ArrowDown: "moveDown",
          Backspace: "delete"
        };
        const action = updateMap[event.key];
        if (action) {
          const sectionId = this.state.sectionId;
          const section = this.props.data.sections[sectionId];
          const index = section.data.indexOf(item);
          this.props.update({
            type: action,
            index,
            sectionId
          });
          event.stopPropagation();
        }
      }
    }
  }

  handleInputChange(event, index, sectionId, attr) {
    const target = event.target;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;

    this.props.update({
      type: "update",
      value,
      attr,
      index,
      sectionId
    });
  }

  handleHymnChange(event, index, sectionId) {
    let value = parseInt(event.target.value);
    if (value < 1) {
      value = 1;
      event.target.value = 1;
    }

    const title = this.hymns[value];
    let requests = [
      {
        type: "update",
        value,
        attr: "hymn",
        index,
        sectionId
      },
      {
        type: "update",
        value: title,
        attr: "title",
        index,
        sectionId
      }
    ];
    // update hymn no. and update title
    this.props.update(requests);
  }

  createLine(item, index, sectionId, selected) {
    let { type, label, name, title } = item;
    let content = label || title || name || type;
    switch (type) {
      case "title":
        content = (
          <div class="w3-row">
            <div class="w3-col w3-right leftmargin" style="width:72px">
              <label class={`${style.label} w3-block`}>Align</label>
              <select
                class="topmargin w3-select"
                onChange={event =>
                  this.handleInputChange(event, index, sectionId, "align")
                }
                value={item.align}
              >
                <option class="icon-menu" value="left">
                  Left
                </option>
                <option value="">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
            <div class="w3-col w3-right leftmargin" style="width:72px">
              <label class={`${style.label} w3-block`}>Style</label>
              <select
                class="topmargin w3-select"
                onChange={event =>
                  this.handleInputChange(event, index, sectionId, "style")
                }
                value={item.style}
              >
                <option value="">Normal</option>
                <option value="bold">Bold</option>
                <option value="italic">Italic</option>
              </select>
            </div>
            <div class="w3-rest">
              <label class={`${style.label}`}>Title</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Title"
                value={title}
                onChange={event =>
                  this.handleInputChange(event, index, sectionId, "title")
                }
              />
            </div>
          </div>
        );
        break;

      case "name":
        content = (
          <div class="w3-cell-row">
            <div class="w3-cell">
              <label class={`${style.label}`}>Label</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Label"
                value={label}
                onChange={event =>
                  this.handleInputChange(event, index, sectionId, "label")
                }
              />
            </div>
            <div class="w3-cell leftpadding">
              <label class={`${style.label} w3-block`}>Name</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Name"
                value={name}
                onChange={event =>
                  this.handleInputChange(event, index, sectionId, "name")
                }
              />
            </div>
          </div>
        );
        break;

      case "hymn":
        content = (
          <div>
            <div class="w3-row">
              <div class="w3-col w3-right leftmargin" style="width:64px">
                <label class={`${style.label} w3-block`}>Hymn</label>
                <input
                  class={`w3-border w3-round ${style.numberinput}`}
                  type="number"
                  placeholder="Hymn Number"
                  value={item.hymn}
                  onInput={event =>
                    this.handleHymnChange(event, index, sectionId)
                  }
                />
              </div>
              <div class="w3-rest">
                <label class={`${style.label}`}>Label</label>
                <input
                  class={`${style.textinput} w3-border w3-round`}
                  type="text"
                  placeholder="Label"
                  value={label}
                  onChange={event =>
                    this.handleInputChange(event, index, sectionId, "label")
                  }
                />
              </div>
            </div>
            <div class="w3-cell-row">
              <div class="w3-cell">
                <label class={`${style.label}`}>Title</label>
                <input
                  class={`${style.textinput} w3-border w3-round`}
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={event =>
                    this.handleInputChange(event, index, sectionId, "title")
                  }
                />
              </div>
            </div>
          </div>
        );
        break;

      case "music":
        content = (
          <div>
            <div class="w3-cell-row">
              <div class="w3-cell">
                <label class={`${style.label}`}>Label</label>
                <input
                  class={`${style.textinput} w3-border w3-round`}
                  type="text"
                  placeholder="Label"
                  value={label}
                  onChange={event =>
                    this.handleInputChange(event, index, sectionId, "label")
                  }
                />
              </div>
              <div class="w3-cell leftpadding">
                <label class={`${style.label} w3-block`}>Name</label>
                <input
                  class={`${style.textinput} w3-border w3-round`}
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={event =>
                    this.handleInputChange(event, index, sectionId, "name")
                  }
                />
              </div>
            </div>
            <div class="w3-cell-row">
              <div class="w3-cell">
                <label class={`${style.label}`}>Title</label>
                <input
                  class={`${style.textinput} w3-border w3-round`}
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={event =>
                    this.handleInputChange(event, index, sectionId, "title")
                  }
                />
              </div>
            </div>
          </div>
        );
        break;

      case "columns":
        break;

      case "article":
        const { heading, body } = item;
        content = (
          <div>
            <div>
              <label class={`${style.label}`}>Heading</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Heading"
                value={heading}
                onChange={event =>
                  this.handleInputChange(event, index, sectionId, "heading")
                }
              />
            </div>
            <label class={`${style.label}`}>Article</label>
            <textarea
              class={`${style.textinput} w3-border w3-round`}
              rows={4}
              value={body}
              onChange={event =>
                this.handleInputChange(event, index, sectionId, "body")
              }
            />
          </div>
        );

        break;

      case "pagebreak":
        content = <label class={`${style.label}`}>Print Page Break</label>;
        break;

      case "gap":
        const gap = item.gap >= 1 ? item.gap : 1;
        content = (
          <div>
            <label class={`${style.label}`}>Gap</label>
            <input
              class={`w3-border w3-round leftmargin ${style.numberinput}`}
              type="number"
              placeholder="Gap"
              value={gap}
              onInput={event =>
                this.handleInputChange(event, index, sectionId, "gap")
              }
            />
          </div>
        );
        break;
    }

    const selectedStyle = selected ? "w3-border-theme w3-border" : "";
    return (
      <li
        class={`w3-white bottommargin ${selectedStyle}`}
        onClick={event => {
          const tag = event.target.tagName.toLowerCase();
          if (tag != "input" && tag != "select") {
            const selectedItem = this.state.selectedItem == item ? null : item; // Toggle selected item
            this.setState({ selectedItem, sectionId });
          }
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flexGrow: 1 }}>{content}</div>
          <i
            class={`icon-menu w3-margin-left${
              this.state.selectedItem == item ? " w3-text-theme" : ""
            }`}
            style={{ alignSelf: "center" }}
          />
        </div>
      </li>
    );
  }

  itemToolBar(item, section, sectionId) {
    const data = section.data;
    const index = data.indexOf(item);
    const toolbar = (
      <div
        class="w3-bar w3-theme-d1"
        style={{ display: "flex", justifyContent: "space-around" }}
        onClick={event => {
          const selectedItem = this.state.selectedItem == item ? null : item; // Toggle selected item
          this.setState({ selectedItem });
        }}
      >
        {this.addMenu(index, sectionId)}

        <button
          onClick={e => {
            this.state.selectedItem = null;
            this.props.update({
              type: "delete",
              index,
              sectionId
            });
            e.stopPropagation();
          }}
          class="w3-bar-item w3-button"
        >
          <i class="icon-minus-circled" />
          Delete
        </button>
        <button
          onClick={e => {
            this.props.update({
              type: "moveUp",
              index,
              sectionId
            });
            e.stopPropagation();
          }}
          class="w3-bar-item w3-button"
        >
          <i class="icon-up-circled" />
          Up
        </button>
        <button
          onClick={e => {
            this.props.update({
              type: "moveDown",
              index,
              sectionId
            });
            e.stopPropagation();
          }}
          class="w3-bar-item w3-button"
        >
          <i class="icon-down-circled" />
          Down
        </button>
      </div>
    );
    return toolbar;
  }

  addMenu(index, sectionId) {
    let items = [
      ["Person", "name"],
      ["Hymn", "hymn"],
      ["Music", "music"],
      ["Title", "title"],
      ["Columns", "columns"],
      ["Announcement", "article"],
      ["Pagebreak", "pagebreak"],
      ["Gap", "gap"]
    ];
    return (
      <div class="w3-dropdown-click">
        <button
          onClick={e => {
            this.toggleAddMenu();
            e.stopPropagation();
          }}
          class="w3-bar-item w3-button"
        >
          <i class="icon-plus-circled" />
          Add
        </button>
        <div id="add-menu" class="w3-dropdown-content w3-bar-block w3-border">
          {items.map(([title, value]) => {
            return (
              <a
                class="w3-bar-item w3-button"
                onClick={e => {
                  this.addItem(value, index, sectionId);
                  this.toggleAddMenu();
                  e.stopPropagation();
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

  toggleAddMenu() {
    var addMenu = document.getElementById("add-menu");
    if (addMenu.className.indexOf("w3-show") == -1) {
      addMenu.className += " w3-show";
    } else {
      addMenu.className = addMenu.className.replace(" w3-show", "");
    }
  }

  sectionTitle(title) {
    return <div class="w3-text-dark-grey w3-padding-16 w3-large">{title}</div>;
  }

  addItem(type, index, sectionId) {
    let item = {};
    switch (type) {
      case "title":
        item = { style: "bold", title: "" };
        break;

      case "name":
        item = { label: "", name: "" };
        break;

      case "hymn":
        item = { label: "", hymn: "", title: "" };
        break;

      case "music":
        item = { label: "", name: "", title: "" };
        break;

      case "columns":
        break;

      case "article":
        item = { heading: "", name: "" };
        break;
    }
    item.type = type;
    this.props.update({
      type: "add",
      item,
      index: index + 1,
      sectionId
    });
    this.setState({ selectedItem: item, sectionId });
    console.log("Add item:", type);
  }
}
