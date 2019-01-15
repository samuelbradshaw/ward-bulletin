import { h, Component } from "preact";
import style from "./style";
import hymnList from "../../assets/hymns";

export default class EditorView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    // create hymns list
    this.hymns = { ...hymnList };
  }

  render({ data }) {
    let sections = [];
    for (let sectionid of data.sectionOrder) {
      let section = data.sections[sectionid];
      if (section) {
        sections.push(this.sectionTitle(section.title));
        let lines = section.data.map(item => this.createLine(item));
        sections.push(<ul class="w3-ul">{lines}</ul>);
      }
    }
    return <div class="w3-content">{sections}</div>;
  }

  handleInputChange(event, item, attr) {
    const target = event.target;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;
    item[attr] = value;
    this.props.update(this.props.data);
  }

  handleHymnChange(event, item, attr, titleattr) {
    let value = parseInt(event.target.value);
    if (value < 1) {
      value = 1;
      event.target.value = 1;
    }
    const title = this.hymns[value];
    item[titleattr] = title;
    this.handleInputChange(event, item, attr);
  }

  createLine(item) {
    let { type, label, name, title } = item;
    let content = label || title || name || type;
    switch (type) {
      case "title":
        content = (
          <div class="w3-row">
            <div class="w3-col w3-right leftmargin" style="width:72px">
              <label class={`${style.label} w3-block`}>Style</label>
              <select
                class="topmargin"
                onChange={event => this.handleInputChange(event, item, "style")}
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
                onChange={event => this.handleInputChange(event, item, "title")}
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
                onChange={event => this.handleInputChange(event, item, "label")}
              />
            </div>
            <div class="w3-cell leftpadding">
              <label class={`${style.label} w3-block`}>Name</label>
              <input
                class={`${style.textinput} w3-border w3-round`}
                type="text"
                placeholder="Name"
                value={name}
                onChange={event => this.handleInputChange(event, item, "name")}
              />
            </div>
          </div>
        );
        break;

      case "hymn":
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
                    this.handleInputChange(event, item, "label")
                  }
                />
              </div>
              <div class="w3-cell leftpadding">
                <label class={`${style.label} w3-block`}>Hymn</label>
                <input
                  class={`w3-border w3-round ${style.numberinput}`}
                  type="number"
                  placeholder="Hymn Number"
                  value={item.hymn}
                  onInput={event =>
                    this.handleHymnChange(event, item, "hymn", "title")
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
                    this.handleInputChange(event, item, "title")
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
                    this.handleInputChange(event, item, "label")
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
                    this.handleInputChange(event, item, "name")
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
                    this.handleInputChange(event, item, "title")
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
                  this.handleInputChange(event, item, "heading")
                }
              />
            </div>
            <label class={`${style.label}`}>Article</label>
            <textarea
              class={`${style.textinput} w3-border w3-round`}
              rows={4}
              value={body}
              onChange={event => this.handleInputChange(event, item, "body")}
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
              onInput={event => this.handleInputChange(event, item, "gap")}
            />
          </div>
        );
        break;
    }

    return <li class="w3-white bottommargin">{content}</li>;
  }

  sectionTitle(title) {
    return <div class="w3-text-dark-grey w3-padding-16 w3-large">{title}</div>;
  }
}
