import { h, Component } from "preact";
import style from "./style";
import hymnList from "../../assets/hymns";
import { PopupMenu, ToolbarButton } from "../../components";
import HTMLEditor from "./html-editor";

let KEY_INDEX = 1;

export default class EditorView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.startGap = null;
    this.state = {
      selectedItem: null,
      selectedSection: null,
      section: null
    };
  }

  render({ data }) {
    let sections = [];
    for (let section of data.sections) {
      sections.push(this.createSection(section));
      let rows = [];
      for (let item of section.data) {
        const selected = item === this.state.selectedItem;
        const index = section.data.indexOf(item);
        rows.push(this.createLine(item, index, section, selected));
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

    const hymn = hymnList[value.toString()];
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
        value: hymn.name,
        attr: "title",
        index,
        section
      },
      {
        type: "update",
        value: hymn.uri,
        attr: "uri",
        index,
        section
      }
    ];
    // update hymn no. and update title
    this.props.update(requests);
  }

  createSection(section) {
    const selected = section === this.state.selectedSection;
    let toolbar = selected ? this.sectionToolBar(section) : null;
    return (
      <div
        class="w3-padding-8 w3-margin-top"
        onClick={event => {
          const selectedSection =
            this.state.selectedSection == section ? null : section; // Toggle selected section
          this.setState({
            selectedSection,
            selectedItem: null
          });
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div class="w3-xlarge" style={{ flexGrow: 1 }}>
            {section.title}
          </div>
          <i
            class={`${
              selected ? "icon-angle-up" : "icon-angle-down"
            } w3-margin-left w3-large ${
              this.state.selectedSection == section ? "w3-text-theme" : ""
            }`}
            style={{ alignSelf: "center" }}
          />
        </div>
        {toolbar}
      </div>
    );
  }

  createLine(item, index, section, selected) {
    let { type, label, name, title } = item;
    let content;
    let color = "";
    let toolbar = selected ? this.itemToolBar(item, section) : null;
    switch (type) {
      case "title":
        content = (
          <div class="w3-row">
            <div class="w3-col w3-right leftmargin" style="width:60px">
              <label class={`${style.label} w3-block`}>Style</label>
              {this.styleMenu(item.style, index, section)}
            </div>

            <div class="w3-col w3-right leftmargin" style="width:60px">
              <label class={`${style.label} w3-block`}>Align</label>
              {this.alignMenu(item.align, index, section)}
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
        color = "w3-border-black";
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
        color = "w3-border-green";
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
        color = "w3-border-pink";
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
        color = "w3-border-orange";
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

            <HTMLEditor
              html={body}
              onChange={value => {
                let props = {
                  type: "update",
                  value,
                  attr: "body",
                  index,
                  section
                };
                this.props.change(props);
              }}
            />
          </div>
        );
        color = "w3-border-teal";
        break;

      case "pagebreak":
        content = <label class={`${style.label}`}>Print Page Break</label>;
        color = "w3-border-blue";
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
        color = "w3-border-brown";
        break;

      case "event":
        let { day, weekday, time, event } = item;
        content = (
          <div class="w3-cell-row">
            <div class="w3-cell" style={{ width: "32px" }}>
              <label class={`${style.label}`}>Day</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Day"
                value={day}
                onChange={event =>
                  this.handleInputChange(event, index, section, "day")
                }
              />
            </div>
            <div class="w3-cell leftpadding" style={{ width: "36px" }}>
              <label class={`${style.label} w3-block`}>Weekday</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Weekday"
                value={weekday}
                onChange={event =>
                  this.handleInputChange(event, index, section, "weekday")
                }
              />
            </div>
            <div class="w3-cell leftpadding" style={{ width: "72px" }}>
              <label class={`${style.label} w3-block`}>Time</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Time"
                value={time}
                onChange={event =>
                  this.handleInputChange(event, index, section, "time")
                }
              />
            </div>
            <div class="w3-cell leftpadding" style={{ width: "auto" }}>
              <label class={`${style.label} w3-block`}>Event</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Event"
                value={event}
                onChange={event =>
                  this.handleInputChange(event, index, section, "event")
                }
              />
            </div>
          </div>
        );
        color = "w3-border-purple";
        break;
    }

    const selectedStyle = selected ? "w3-border-theme" : "";
    KEY_INDEX++;

    return (
      <li
        key={KEY_INDEX.toString()}
        class={`toolbar-toggle w3-leftbar w3-round topmargin w3-border ${selectedStyle} ${color} w3-white`}
        onClick={event => {
          if (event.target.classList.contains("toolbar-toggle")) {
            const selectedItem = this.state.selectedItem == item ? null : item; // Toggle selected item
            this.setState({
              selectedItem,
              section,
              selectedSection: null
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
            class={`${
              selected ? "icon-angle-up" : "icon-angle-down"
            } w3-margin-left w3-large toolbar-toggle ${
              this.state.selectedItem == item ? "w3-text-theme" : ""
            }`}
            style={{ alignSelf: "center" }}
          />
        </div>
        {toolbar}
      </li>
    );
  }

  itemToolBar(item, section) {
    const data = section.data;
    const index = data.indexOf(item);
    const toolbar = (
      <div
        class="w3-theme-d1 w3-margin-top w3-round w3-card-2"
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
        onClick={event => {
          const selectedItem = this.state.selectedItem == item ? null : item; // Toggle selected item
          this.setState({ selectedItem });
        }}
      >
        {this.addItemMenu(index, section)}

        <ToolbarButton
          title="Delete"
          icon="icon-minus-circled"
          onClick={e => {
            this.state.selectedItem = null;
            this.props.update({
              type: "delete",
              index,
              section
            });
            e.stopPropagation();
          }}
        />

        <ToolbarButton
          title="Up"
          icon="icon-angle-up"
          onClick={e => {
            this.props.update({
              type: "moveUp",
              index,
              section
            });
            e.stopPropagation();
          }}
          disabled={index < 1}
        />

        <ToolbarButton
          title="Down"
          icon="icon-angle-down"
          onClick={e => {
            this.props.update({
              type: "moveDown",
              index,
              section
            });
            e.stopPropagation();
          }}
          disabled={index >= data.length - 1}
        />
      </div>
    );
    return toolbar;
  }

  sectionToolBar(section) {
    let sections = this.props.data.sections;
    const index = sections.indexOf(section);
    const isSection = true;
    const toolbar = (
      <div
        class="w3-theme-d1 w3-margin-top w3-round w3-card toolbar-toggle"
        style={{
          display: "flex",
          justifyContent: "space-around"
        }}
        onClick={event => {
          const selectedSection =
            this.state.selectedSection == section ? null : section; // Toggle selected item
          this.setState({ selectedSection });
        }}
      >
        {this.addSectionMenu(index, section)}

        <ToolbarButton
          title="Delete"
          icon="icon-minus-circled"
          onClick={e => {
            if (confirm(`Delete "${section.title}"?`)) {
              // delete section
              this.state.selectedSection = null;
              this.props.update({
                type: "delete",
                index,
                section,
                isSection
              });
            }
            e.stopPropagation();
          }}
        />

        <ToolbarButton
          title="Up"
          icon="icon-angle-up"
          onClick={e => {
            // move section up
            this.props.update({
              type: "moveUp",
              index,
              section,
              isSection
            });
            e.stopPropagation();
          }}
          disabled={index < 1}
        />

        <ToolbarButton
          title="Down"
          icon="icon-angle-down"
          onClick={e => {
            // move section down
            this.props.update({
              type: "moveDown",
              index,
              section,
              isSection
            });
            e.stopPropagation();
          }}
          disabled={index >= sections.length - 1}
        />
      </div>
    );
    return toolbar;
  }

  addItemMenu(index, section) {
    let items = [
      ["Person", "name"],
      ["Hymn", "hymn"],
      ["Music", "music"],
      ["Title", "title"],
      ["Columns", "columns"],
      ["Announcement", "article"],
      ["Calendar Event", "event"],
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
        items={items}
        handler={value => this.addItem(value, index, section)}
        isButton
      />
    );
  }

  addSectionMenu(index, section) {
    let items = [
      ["Program", "program"],
      ["Announcements", "announcements"],
      ["Calendar", "calendar"],
      ["Leaders", "leaders"],
      ["Missionaries", "missionaries"],
      ["Lessons", "lessons"],
      ["Information", "information"],
      ["Classes", "classes"]
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
        items={items}
        handler={(value, title) => this.addSection(title, value, index)}
        isButton
      />
    );
  }

  styleMenu(style, index, section) {
    let items = [
      ["Plain", ""],
      [this.styleTitle("bold"), "bold"],
      [this.styleTitle("italic"), "italic"]
    ];
    return (
      <PopupMenu
        title={this.styleTitle(style)}
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
    let styleTitle = "Plain";
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

      case "event":
        item = { day: "", date: "", time: "", event: "" };
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

  addSection(title, type, index) {
    let item = {
      title,
      type,
      data: [{ type: "title", title, style: "bold" }]
    };
    this.props.update({
      type: "add",
      item,
      index: index + 1,
      isSection: true
    });
    this.setState({
      selectedSection: item
    });
  }
}
