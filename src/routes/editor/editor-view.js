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
      sectionId: null
    };
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
          const index = section.data.indexOf(item);
          rows.push(this.createLine(item, index, sectionId, selected));
          if (selected) {
            // this row is selected
            let toolbar = this.itemToolBar(item, section, sectionId);
            rows.push(toolbar);
          }
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

  handleInputChange(event, index, sectionId, attr, noUndo) {
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
      sectionId
    };
    if (noUndo) {
      this.props.change(props);
    } else {
      this.props.update(props);
    }
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
            <div class="w3-col w3-right leftmargin" style="width:44px">
              <label class={`${style.label} w3-block`}>Align</label>
              {this.alignMenu(item.align, index, sectionId)}
            </div>

            <div class="w3-col w3-right leftmargin" style="width:54px">
              <label class={`${style.label} w3-block`}>Style</label>
              {this.styleMenu(item.style, index, sectionId)}
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
                this.handleInputChange(event, index, sectionId, "gap");
              }}
              onInput={event => {
                // continuous updates
                this.handleInputChange(event, index, sectionId, "gap", true);
              }}
              class="slider w3-margin-left w3-cell-middle"
            />
          </div>
        );
        break;
    }

    const selectedStyle = selected ? "w3-border-theme w3-border" : "";
    return (
      <li
        class={`w3-white topmargin ${selectedStyle}`}
        onClick={event => {
          const tag = event.target.tagName.toLowerCase();
          if (tag != "input" && tag != "select") {
            const selectedItem = this.state.selectedItem == item ? null : item; // Toggle selected item
            this.setState({
              selectedItem,
              sectionId
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

  itemToolBar(item, section, sectionId) {
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
        handler={value => this.addItem(value, index, sectionId)}
        isButton
      />
    );
  }

  styleMenu(style, index, sectionId) {
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
            sectionId
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

  alignMenu(align, index, sectionId) {
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
            sectionId
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
    this.setState({
      selectedItem: item,
      sectionId
    });
    console.log("Add item:", type);
  }
}
