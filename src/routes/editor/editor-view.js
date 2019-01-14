import { h, Component } from "preact";
import style from "./style";

export default class EditorView extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  createLine(item) {
    let { type, label, name, title } = item;
    let content = label || title || name || type;
    switch (type) {
      case "title":
        content = (
          <div>
            <label class={`${style.label}  w3-left`}>Title</label>
            <span class="w3-right">
              <select
                class={style.separator}
                onChange={event => this.handleInputChange(event, item, "style")}
                value={item.style}
              >
                <option value="">Normal</option>
                <option value="bold">Bold</option>
                <option value="italic">Italic</option>
              </select>
            </span>
            <input
              class={`${style.textinput} w3-border w3-round`}
              type="text"
              placeholder="Title"
              value={title}
              onChange={event => this.handleInputChange(event, item, "title")}
            />
          </div>
        );
        break;

      case "name":
        break;

      case "hymn":
        break;

      case "music":
        break;

      case "columns":
        break;

      case "article":
        break;

      case "pagebreak":
        break;

      case "gap":
        break;
    }

    return <li class={`w3-white ${style.separator}`}>{content}</li>;
  }

  sectionTitle(title) {
    return <div class="w3-text-dark-grey w3-padding-16 w3-large">{title}</div>;
  }
}
