import { h, Component } from "preact";
import style from "./style";
import hymnList from "../../assets/hymns";
import { PopupMenu } from "../../components";

export default class EditorView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    // create hymns list
    this.hymns = { ...hymnList };
    this.startGap = null;
    this.state = {
      selectedItem: null,
      section: null
    };
  }

  render({ data }) {
    let sections = [];
    for (let section of data.sections) {
      sections.push(this.sectionTitle(section.title));
      let rows = [];
      for (let item of section.data) {
        const selected = item === this.state.selectedItem;
        const index = section.data.indexOf(item);
        rows.push(this.createLine(item, index, section, selected));
        if (selected) {
          // this row is selected
          let toolbar = this.itemToolBar(item, section);
          rows.push(toolbar);
        }
      }

      sections.push(<ul class="w3-ul">{rows}</ul>);
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
          const section = this.state.section;
          const index = section.data.indexOf(item);
          this.props.update({
            type: action,
            index,
            section
          });
          event.stopPropagation();
        }
      }
    }
  }

  handleInputChange(event, index, section, attr, noUndo) {
    const target = event.target;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;

    let props = {
      type: "update",
      value,
      attr,
      index,
      section
    };
    if (noUndo) {
      this.props.change(props);
    } else {
      this.props.update(props);
    }
  }

  handleHymnChange(event, index, section) {
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
        section
      },
      {
        type: "update",
        value: title,
        attr: "title",
        index,
        section
      }
    ];
    // update hymn no. and update title
    this.props.update(requests);
  }

  createLine(item, index, section, selected) {
    let { type, label, name, title } = item;
    let content = label || title || name || type;
    let color = "w3-white";
    switch (type) {
      case "title":
        content = (
          <div class="w3-row">
            <div class="w3-col w3-right leftmargin" style="width:44px">
              <label class={`${style.label} w3-block`}>Align</label>
              {this.alignMenu(item.align, index, section)}
            </div>

            <div class="w3-col w3-right leftmargin" style="width:54px">
              <label class={`${style.label} w3-block`}>Style</label>
              {this.styleMenu(item.style, index, section)}
            </div>

            <div class="w3-rest">
              <label class={`${style.label}`}>Title</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Title"
                value={title}
                onChange={event =>
                  this.handleInputChange(event, index, section, "title")
                }
              />
            </div>
          </div>
        );
        color = "w3-pale-green";
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
                  this.handleInputChange(event, index, section, "label")
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
                  this.handleInputChange(event, index, section, "name")
                }
              />
            </div>
          </div>
        );
        color = "w3-pale-blue";
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
                    this.handleHymnChange(event, index, section)
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
                    this.handleInputChange(event, index, section, "label")
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
                    this.handleInputChange(event, index, section, "title")
                  }
                />
              </div>
            </div>
          </div>
        );
        color = "w3-pale-red";
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
                    this.handleInputChange(event, index, section, "label")
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
                    this.handleInputChange(event, index, section, "name")
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
                    this.handleInputChange(event, index, section, "title")
                  }
                />
              </div>
            </div>
          </div>
        );
        color = "w3-pale-yellow";
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
                  this.handleInputChange(event, index, section, "heading")
                }
              />
            </div>
            <label class={`${style.label}`}>Article</label>
            <textarea
              class={`${style.textinput} w3-border w3-round`}
              rows={4}
              value={body}
              onChange={event =>
                this.handleInputChange(event, index, section, "body")
              }
            />
          </div>
        );
        color = "w3-light-grey";
        break;

      case "pagebreak":
        content = <label class={`${style.label}`}>Print Page Break</label>;
        color = "w3-blue-grey";
        break;

      case "gap":
        const gap = item.gap >= 1 ? item.gap : 1;
        if (!this.startGap) {
          this.startGap = gap; // save for undo
        }
        content = (
          <div>
            <label class={`${style.label}`}>Gap</label>
            <input
              type="range"
              value={gap}
              min="1"
              max="10"
              onChange={event => {
                // final update
                item.gap = this.startGap;
                this.startGap = null;
                this.handleInputChange(event, index, section, "gap");
              }}
              onInput={event => {
                // continuous updates
                this.handleInputChange(event, index, section, "gap", true);
              }}
              class="slider w3-margin-left w3-cell-middle"
            />
          </div>
        );
        // color = "w3-pale-green";
        break;
    }

    const selectedStyle = selected ? "w3-border-theme w3-border" : "";
    return (
      <li
        class={`topmargin ${selectedStyle} ${color}`}
        onClick={event => {
          const tag = event.target.tagName.toLowerCase();
          if (tag != "input" && tag != "select") {
            const selectedItem = this.state.selectedItem == item ? null : item; // Toggle selected item
            this.setState({
              selectedItem,
              section
            });
          }
        }}
        style={{ padding: "8px 8px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
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

  itemToolBar(item, section) {
    const data = section.data;
    const index = data.indexOf(item);
    const toolbar = (
      <div
        class="w3-bar w3-theme-d1"
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
        onClick={event => {
          const selectedItem = this.state.selectedItem == item ? null : item; // Toggle selected item
          this.setState({ selectedItem });
        }}
      >
        {this.addMenu(index, section)}

        <button
          onClick={e => {
            this.state.selectedItem = null;
            this.props.update({
              type: "delete",
              index,
              section
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
              section
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
              section
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

  addMenu(index, section) {
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
    let title = (
      <span>
        <i class="icon-plus-circled" />
        Add
      </span>
    );
    return (
      <PopupMenu
        title={title}
        menuId="add-menu"
        items={items}
        handler={value => this.addItem(value, index, section)}
        isButton
      />
    );
  }

  styleMenu(style, index, section) {
    let items = [
      ["Normal", ""],
      [this.styleTitle("bold"), "bold"],
      [this.styleTitle("italic"), "italic"]
    ];
    return (
      <PopupMenu
        title={this.styleTitle(style)}
        menuId="style-menu"
        items={items}
        handler={value =>
          this.props.update({
            type: "update",
            value,
            attr: "style",
            index,
            section
          })
        }
      />
    );
  }

  styleTitle(style) {
    let styleTitle = "Normal";
    if (style === "bold") {
      styleTitle = <span style={{ fontWeight: "bold" }}>Bold</span>;
    } else if (style === "italic") {
      styleTitle = <span style={{ fontStyle: "italic" }}>Italic</span>;
    }
    return styleTitle;
  }

  alignMenu(align, index, section) {
    let items = [
      [this.alignTitle("left"), "left"],
      [this.alignTitle(""), ""],
      [this.alignTitle("right"), "right"]
    ];
    return (
      <PopupMenu
        title={this.alignTitle(align)}
        menuId="align-menu"
        items={items}
        handler={value =>
          this.props.update({
            type: "update",
            value,
            attr: "align",
            index,
            section
          })
        }
      />
    );
  }

  alignTitle(align) {
    let alignTitle = <i class="icon-align-center" />;
    if (align === "left") {
      alignTitle = <i class="icon-align-left" />;
    } else if (align === "right") {
      alignTitle = <i class="icon-align-right" />;
    }
    return alignTitle;
  }

  sectionTitle(title) {
    return <div class="w3-text-white w3-padding-8 w3-xlarge">{title}</div>;
  }

  addItem(type, index, section) {
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
      section
    });
    this.setState({
      selectedItem: item,
      section
    });
    console.log("Add item:", type);
  }
}
