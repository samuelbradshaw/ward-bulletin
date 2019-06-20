import { h, Component } from "preact";
import style from "./style";
import hymnList from "../../assets/hymns.json";
import {
  PopupMenu,
  ToolbarButton,
  Modal,
  NumberInput,
  Label,
  TextInput
} from "../../components";
import { getAutoDate } from "../../misc/helper";
import HTMLEditor from "./html-editor";
import prefs from "../../data/prefs";
import MediaLibrary from "./media-library";

let KEY_INDEX = 1;

export default class EditorView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.skipRender = false;
    this.mediaSection = null;
    this.mediaIndex = 0;
    this.state = {
      selectedItem: null,
      selectedSection: null,
      section: null,
      modal: null
    };
    this.clipboard = null;
  }

  shouldComponentUpdate() {
    let skipRender = this.skipRender;
    this.skipRender = false;
    return !skipRender;
  }

  render({ data }, { modal }) {
    this.setupDates();
    let sections = [];
    for (let section of data.sections) {
      sections.push(this.createSection(section));
      if (!section.hidden) {
        let rows = [];
        for (let item of section.data) {
          const selected = item === this.state.selectedItem;
          const index = section.data.indexOf(item);
          rows.push(this.createLine(item, index, section, selected));
        }
        sections.push(<ul class="w3-ul">{rows}</ul>);
      }
    }

    return (
      <div
        id="keyhandler"
        onKeyDown={event => this.handleKeyEvent(event)}
        onCopy={event => this.clipboardEvent(event)}
        onCut={event => this.clipboardEvent(event)}
        onPaste={event => this.clipboardEvent(event)}
        tabIndex="-1"
        style={{ outline: "none" }}
      >
        <div>{sections}</div>

        {modal === "media" && (
          <Modal close={() => this.setState({ modal: null })}>
            <MediaLibrary
              select={item => {
                this.setState({ modal: null });
                let url = item.thumbnail.replace("-thumbnail.", "-mobile.");
                let props = {
                  type: "update",
                  value: url,
                  attr: "url",
                  index: this.mediaIndex,
                  section: this.mediaSection
                };
                this.props.update(props);
              }}
            />
          </Modal>
        )}
      </div>
    );
  }

  handleKeyEvent(event) {
    if (document.activeElement.tabIndex >= 0) {
      return; // focused item is an input element
    }

    // up, down delete
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
        return;
      }
    }

    // undo, redo
    if (event.metaKey || event.ctrlKey) {
      let key = event.key;
      // redo on Mac is cmd-shift-z
      if (event.metaKey && event.shiftKey) {
        key = "y";
      }
      if (key === "z") {
        // undo
        this.props.change({
          type: "undo"
        });
        event.stopPropagation();
      } else if (key === "y") {
        // redo
        this.props.change({
          type: "redo"
        });
        event.stopPropagation();
      }
    }
  }

  handleFocus = event => {
    setTimeout(() => event.target.select(), 100);
    event.stopPropagation();
  };

  clipboardEvent(event) {
    if (document.activeElement.tabIndex >= 0) {
      return; // focused item is an input element
    }

    console.log("Clipboard event", JSON.stringify(event));
    let item = this.state.selectedItem;
    const section = this.state.section;
    const index = section.data.indexOf(item);
    if (item) {
      switch (event.type) {
        case "cut":
          // delete, then copy
          this.props.update({
            type: "delete",
            index,
            section
          });
          this.state.selectedItem = null;
        // fall thru
        case "copy":
          this.clipboard = JSON.parse(JSON.stringify(item));
          break;
        case "paste":
          if (this.clipboard) {
            this.state.selectedItem = JSON.parse(
              JSON.stringify(this.clipboard)
            );
            this.props.update({
              type: "add",
              item,
              index,
              section
            });
          }
          break;
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
    this.skipRender = true;
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

    const hymn = hymnList[value.toString() - 1];
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
      },
      {
        type: "update",
        value: hymn.id,
        attr: "id",
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
    const index = this.props.data.sections.indexOf(section);
    return (
      <div
        class={!section.hidden && "w3-section"}
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
          <div
            class={section.hidden ? "w3-large" : "w3-xlarge"}
            style={{ flexGrow: 1 }}
          >
            {section.title}
          </div>
          <span
            class={`${
              section.hidden ? "icon-angle-up" : "icon-angle-down"
              } w3-xlarge`}
            style={{ alignSelf: "center" }}
            onClick={e => {
              this.props.update({
                type: "update",
                value: section.hidden ? undefined : true,
                attr: "hidden",
                index,
                section,
                isSection: true
              });
              e.stopPropagation();
            }}
          />
          <i
            class={`icon-menu w3-margin-left ${
              this.state.selectedSection == section ? "w3-text-theme" : ""
              }`}
            style={{ alignSelf: "center", marginRight: 8 }}
          />
        </div>
        {toolbar}
      </div>
    );
  }

  createLine(item, index, section, selected) {
    let { type, label, name, title, body } = item;
    let content;
    let color = "";
    let toolbar = selected ? this.itemToolBar(item, section) : null;
    let showLabels = !prefs.get(prefs.hideLabels);

    switch (type) {
      case "title":
      case "date":
        // title and date are very much the same
        let titleLabel;
        if (type === "date") {
          titleLabel = "Date";
          if (this.autoDateValue) {
            title = this.autoDateValue;
            item.title = title;
          }
        } else {
          titleLabel = "Title";
        }
        content = (
          <div class="w3-row">
            <div class="w3-col w3-right" style={{ width: 56, marginLeft: 18 }}>
              <HidingLabel name="Size" />
              <NumberInput
                value={item.size || 15}
                onChange={event => {
                  let value = parseInt(event.target.value);
                  value = Math.max(value, 6);
                  let request = {
                    type: "update",
                    value,
                    attr: "size",
                    index,
                    section
                  };
                  this.updateNoRender(request);
                }}
                onFocus={this.handleFocus}
                height={32}
              />
            </div>

            <div class="w3-col w3-right leftmargin" style="width:60px">
              <HidingLabel name="Style" />
              {this.styleMenu(item.style, index, section)}
            </div>

            <div class="w3-col w3-right leftmargin" style="width:60px">
              <HidingLabel name="Align" />
              {this.alignMenu(item.align, index, section)}
            </div>

            <div class="w3-rest">
              <HidingLabel name={titleLabel} />
              <TextInput
                placeholder={titleLabel}
                value={title}
                onChange={event =>
                  this.handleInputChange(event, index, section, "title")
                }
                onFocus={this.handleFocus}
              />
            </div>
          </div>
        );
        color = type === "title" ? "w3-border-black" : "w3-border-light-blue";
        break;

      case "name":
        content = (
          <div class="w3-cell-row">
            <div class="w3-cell">
              <HidingLabel name="Label" />
              <TextInput
                placeholder="Label"
                value={label}
                onChange={event =>
                  this.handleInputChange(event, index, section, "label")
                }
                onFocus={this.handleFocus}
              />
            </div>
            <div class="w3-cell leftpadding">
              <HidingLabel name="Name" />
              <TextInput
                placeholder="Name"
                value={name}
                onChange={event =>
                  this.handleInputChange(event, index, section, "name")
                }
                onFocus={this.handleFocus}
              />
            </div>
          </div>
        );
        color = "w3-border-indigo";
        break;

      case "image":
        let url = item.url;
        content = (
          <div>
            <div>
              <HidingLabel name="Image" />
              <TextInput
                placeholder="Image URL"
                value={url}
                onChange={event =>
                  this.handleInputChange(event, index, section, "url")
                }
                onFocus={this.handleFocus}
              />
            </div>

            <div class="w3-row">
              <div class="w3-col w3-colleftmargin" style="width:120px">
                <HidingLabel name="Library" />
                <button
                  class="w3-btn w3-border-theme w3-round w3-border w3-padding-small"
                  style={{ height: 32 }}
                  onClick={() => {
                    this.mediaSection = section;
                    this.mediaIndex = index;
                    this.setState({ modal: "media" });
                  }}
                >
                  Media Library
                </button>
              </div>
              <div class="w3-col leftmargin" style="width:56px">
                <HidingLabel name="Align" />
                {this.alignMenu(item.align, index, section)}
              </div>
              <div class="w3-col leftmargin" style="width:120px">
                <HidingLabel name="Width" />
                <span>
                  <NumberInput
                    postscript="%"
                    min={0}
                    max={100}
                    step={5}
                    height={32}
                    value={item.width || 80}
                    onChange={value =>
                      this.updateNoRender({
                        type: "update",
                        value: value,
                        attr: "width",
                        index,
                        section
                      })
                    }
                    onFocus={this.handleFocus}
                  />
                </span>
              </div>
            </div>
          </div>
        );
        color = "w3-border-amber";
        break;

      case "hymn":
        content = (
          <div>
            <div class="w3-row">
              <div class="w3-col w3-right leftmargin" style={{ width: 72 }}>
                <HidingLabel name="Hymn" />
                <input
                  class={`w3-border w3-border-theme w3-round ${
                    style.numberinput
                    }`}
                  type="number"
                  placeholder="Hymn Number"
                  value={item.hymn}
                  onChange={event =>
                    this.handleHymnChange(event, index, section)
                  }
                  onFocus={this.handleFocus}
                />
              </div>
              <div class="w3-rest">
                <HidingLabel name="Label" />
                <TextInput
                  placeholder="Label"
                  value={label}
                  onChange={event =>
                    this.handleInputChange(event, index, section, "label")
                  }
                  onFocus={this.handleFocus}
                />
              </div>
            </div>
            <div class="w3-cell-row">
              <div class="w3-cell">
                <HidingLabel name="Title" />
                <TextInput
                  placeholder="Title"
                  value={title}
                  onChange={event =>
                    this.handleInputChange(event, index, section, "title")
                  }
                  onFocus={this.handleFocus}
                />
              </div>
            </div>
          </div>
        );
        color = "w3-border-green";
        break;

      case "music":
        content = (
          <div>
            <div class="w3-cell-row">
              <div class="w3-cell">
                <HidingLabel name="Label" />
                <TextInput
                  placeholder="Label"
                  value={label}
                  onChange={event =>
                    this.handleInputChange(event, index, section, "label")
                  }
                  onFocus={this.handleFocus}
                />
              </div>
              <div class="w3-cell leftpadding">
                <HidingLabel name="Name" />
                <TextInput
                  placeholder="Name"
                  value={name}
                  onChange={event =>
                    this.handleInputChange(event, index, section, "name")
                  }
                  onFocus={this.handleFocus}
                />
              </div>
            </div>
            <div class="w3-cell-row">
              <div class="w3-cell">
                <HidingLabel name="Title" />
                <TextInput
                  placeholder="Title"
                  value={title}
                  onChange={event =>
                    this.handleInputChange(event, index, section, "title")
                  }
                  onFocus={this.handleFocus}
                />
              </div>
            </div>
          </div>
        );
        color = "w3-border-red";
        break;

      case "columns":
        content = (
          <div>
            <div>
              <HidingLabel name="Column Count" />
              <input
                style={{ width: 44 }}
                class={`${style.textinput} w3-border w3-border-theme w3-round`}
                type="number"
                value={item.count}
                onChange={event => {
                  let value = parseInt(event.target.value);
                  value = Math.max(1, Math.min(4, value));
                  let request = {
                    type: "update",
                    value,
                    attr: "count",
                    index,
                    section
                  };
                  this.updateNoRender(request);
                }}
                onFocus={this.handleFocus}
              />
            </div>

            <HidingLabel name="Column Text" />
            <textarea
              class="w3-border w3-border-theme"
              rows="5"
              style={{ width: "100%" }}
              value={item.data}
              onInput={event => {
                this.updateNoRender({
                  type: "update",
                  value: event.target.value,
                  attr: "data",
                  index,
                  section
                });
              }}
            />
          </div>
        );

        color = "w3-border-orange";
        break;

      case "article":
        let { heading } = item;
        content = (
          <div>
            <div>
              <HidingLabel name="Heading" />
              <TextInput
                placeholder="Heading"
                value={heading}
                onChange={event =>
                  this.handleInputChange(event, index, section, "heading")
                }
                onFocus={this.handleFocus}
              />
            </div>
            <HidingLabel name="Article" />

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
                this.skipRender = true;
                this.props.change(props);
              }}
            />
          </div>
        );
        color = "w3-border-teal";
        break;

      case "styledtext":
        content = (
          <div>
            <HidingLabel name="Styled Text" />

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
                this.skipRender = true;
                this.props.change(props);
              }}
            />
          </div>
        );
        color = "w3-border-pink";
        break;

      case "markdown":
        content = (
          <div>
            <HidingLabel name="Markdown" />

            <textarea
              class="w3-border w3-border-theme"
              rows="10"
              style={{ width: "100%" }}
              value={item.markdown}
              onInput={event => {
                let marked = require("marked");
                let markdown = event.target.value;
                let html = marked(markdown);
                this.updateNoRender([{
                  type: "update",
                  value: event.target.value,
                  attr: "markdown",
                  index,
                  section
                },
                {
                  type: "update",
                  value: html,
                  attr: "body",
                  index,
                  section
                }]);
              }}
            />
          </div>
        );
        color = "w3-border-pink";
        break;

      case "pagebreak":
        content = <HidingLabel name="Print Page Break" />;
        color = "w3-border-grey";
        break;

      case "gap":
        const gap = item.gap || 0;
        const printgap = item.printgap !== undefined ? item.printgap || 0 : gap;
        content = (
          <div class="w3-cell-row">
            <div class="w3-cell">
              <HidingLabel name="Gap" />
              <RangeSlider
                value={gap}
                handler={(event, final) => {
                  if (final) {
                    item.gap = gap; // restore to original value for undo
                  }
                  this.handleInputChange(event, index, section, "gap", !final);
                }}
              />
            </div>
            <div class="w3-cell">
              <HidingLabel name="Print Gap" />
              <RangeSlider
                value={printgap}
                handler={(event, final) => {
                  if (final) {
                    item.printgap = printgap; // restore to original value for undo
                  }
                  this.handleInputChange(
                    event,
                    index,
                    section,
                    "printgap",
                    !final
                  );
                }}
              />
            </div>
          </div>
        );
        color = "w3-border-blue-grey";
        break;

      case "event":
        let { day, weekday, time, event } = item;
        content = (
          <div class="w3-cell-row">
            <div class="w3-cell" style={{ width: "32px" }}>
              <HidingLabel name="Day" />
              <TextInput
                placeholder="Day"
                value={day}
                onChange={event =>
                  this.handleInputChange(event, index, section, "day")
                }
                onFocus={this.handleFocus}
              />
            </div>
            <div class="w3-cell leftpadding" style={{ width: "36px" }}>
              <HidingLabel name="Weekday" />
              <TextInput
                placeholder="Weekday"
                value={weekday}
                onChange={event =>
                  this.handleInputChange(event, index, section, "weekday")
                }
                onFocus={this.handleFocus}
              />
            </div>
            <div class="w3-cell leftpadding" style={{ width: "72px" }}>
              <HidingLabel name="Time" />
              <TextInput
                placeholder="Time"
                value={time}
                onChange={event =>
                  this.handleInputChange(event, index, section, "time")
                }
                onFocus={this.handleFocus}
              />
            </div>
            <div class="w3-cell leftpadding" style={{ width: "auto" }}>
              <HidingLabel name="Event" />
              <TextInput
                placeholder="Event"
                value={event}
                onChange={event =>
                  this.handleInputChange(event, index, section, "event")
                }
                onFocus={this.handleFocus}
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
        class={`editor-item toolbar-toggle w3-leftbar w3-round topmargin w3-border ${selectedStyle} ${color} w3-white`}
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
            class={`icon-menu toolbar-toggle ${
              this.state.selectedItem == item ? "w3-text-theme" : ""
              }`}
            style={{ alignSelf: "center", marginLeft: 4 }}
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
          title="Clone"
          icon="icon-clone"
          onClick={e => {
            // clone item
            item = JSON.parse(JSON.stringify(item));
            this.state.selectedItem = item;
            this.props.update({
              type: "add",
              item,
              index: index + 1,
              section
            });
            e.stopPropagation();
          }}
        />

        <ToolbarButton
          title="Delete"
          icon="icon-minus-circled"
          onClick={e => {
            if (section.data.length > 1) {
              this.state.selectedItem = null;
              this.props.update({
                type: "delete",
                index,
                section
              });
            }
            e.stopPropagation();
          }}
          disabled={section.data.length <= 1}
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
            if (this.props.data.sections.length > 1) {
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
            }
            e.stopPropagation();
          }}
          disabled={this.props.data.sections.length <= 1}
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
      ["Article", "article", ["announcements", "information"]],
      ["Calendar Event", "event", ["calendar"]],
      ["Person", "name", ["program", "leaders", "missionaries", "classes"]],
      ["Hymn", "hymn", ["program"]],
      ["Music", "music", ["program"]],
      ["Title", "title", ["program", "calendar", "cover"]],
      ["Date", "date", ["program", "calendar", "cover"]],
      [
        "Styled Text",
        "styledtext",
        ["cover, program, announcements", "information"]
      ],
      ["Image", "image", ["cover"]],
      ["Columns", "columns", ["program"]],
      ["Pagebreak", "pagebreak", []],
      ["Gap", "gap", []],
      [
        "Markdown",
        "markdown",
        ["cover, program, announcements", "information"]
      ],
    ];

    let type = section.type;

    // prioritize items for each section
    let high = items.filter(item => item[2].includes(type));
    let low = items.filter(item => !item[2].includes(type));

    items = [...high, ["-"], ...low];

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
      ["Cover", "cover"],
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
      case "date":
        item = { style: "bold", title: "" };
        break;

      case "name":
        item = { label: "", name: "" };
        break;

      case "image":
        item = { url: "", align: "center" };
        break;

      case "hymn":
        item = { label: "", hymn: "", title: "" };
        break;

      case "music":
        item = { label: "", name: "", title: "" };
        break;

      case "columns":
        item = { count: 2, data: "" };
        break;

      case "article":
        item = { heading: "", body: "" };
        break;

      case "styledtext":
        item = { body: "" };
        break;

      case "event":
        item = { day: "", date: "", time: "", event: "" };
        break;

      case "markdown":
        item = { body: "", markdown: "" }
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

  updateNoRender(request) {
    this.skipRender = true;
    this.props.update(request);
  }

  setupDates() {
    let data = this.props.data;
    let date = getAutoDate(data.settings.autoDate);
    if (!date) {
      this.autoDateValue = null;
      return; // auto date is turned off
    }
    let options = {
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    this.autoDateValue = date.toLocaleDateString(undefined, options);
  }
}

function HidingLabel({ name }) {
  return prefs.get(prefs.hideLabels) ? null : <Label name={name} />;
}

function RangeSlider({ value, handler }) {
  return (
    <input
      type="range"
      value={value}
      min="0"
      max="32"
      onChange={event => {
        // final update
        handler(event, true);
      }}
      onInput={event => {
        // continuous updates
        handler(event);
      }}
      class="slider w3-margin-left w3-cell-middle"
    />
  );
}
