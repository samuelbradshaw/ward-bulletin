import { h, Component } from "preact";
import style from "./style";
import { shadeColor, hideDropdowns } from "../../misc/helper";

let uniqueId = 1;

var exec = function exec(command) {
  var value =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return document.execCommand(command, false, value);
};

class HTMLEditor extends Component {
  editor = null;

  constructor(props) {
    super(props);
    this.editorId = `editor-${uniqueId++}`;
  }

  componentDidMount() {
    this.content.innerHTML = this.props.html || "";
  }

  render() {
    let actionButtons = actions().map(action => (
      <button
        class={style.popupMenuButton}
        type="button"
        onClick={e => action.result(e) && this.content.focus()}
        title={action.title}
      >
        {action.icon}
      </button>
    ));

    let myStyle = style;
    let popupMenu = style.popupMenu;

    return (
      <div id={this.editorId} class={style.popupMenu}>
        <div class={style.popupMenuActionbar}>{actionButtons}</div>
        <div
          contentEditable={true}
          class={style.popupMenuContent}
          ref={content => (this.content = content)}
          onInput={ref => {
            this.props.onChange(this.content.innerHTML);
          }}
        />
      </div>
    );
  }
}

function actions() {
  return [
    {
      icon: <i class="icon-ccw" />,
      title: "Undo",
      result: () => exec("undo")
    },
    {
      icon: <i class="icon-cw" />,
      title: "Redo",
      result: () => exec("redo")
    },
    {
      icon: <i class="icon-bold" />,
      title: "Bold",
      result: () => exec("bold")
    },
    {
      icon: <i class="icon-underline" />,
      title: "Underline",
      result: () => exec("underline")
    },
    {
      icon: <i class="icon-italic" />,
      title: "Italic",
      result: () => exec("italic")
    },
    {
      icon: <i class="icon-strike" />,
      title: "Strike-through",
      result: () => exec("strikethrough")
    },
    {
      icon: <i class="icon-align-left" />,
      title: "Align Left",
      result: () => exec("justifyLeft")
    },
    {
      icon: <i class="icon-align-center" />,
      title: "Align Center",
      result: () => exec("justifyCenter")
    },
    {
      icon: <i class="icon-align-right" />,
      title: "Align Right",
      result: () => exec("justifyRight")
    },
    {
      icon: <i class="icon-align-justify" />,
      title: "Justify",
      result: () => exec("justifyFull")
    },
    {
      icon: <i class="icon-indent-right" />,
      title: "Indent",
      result: () => exec("indent")
    },
    {
      icon: <i class="icon-indent-left" />,
      title: "Outdent",
      result: () => exec("outdent")
    },
    {
      icon: <i class="icon-list-numbered" />,
      title: "Numbered List",
      result: () => exec("insertOrderedList")
    },
    {
      icon: <i class="icon-list-bullet" />,
      title: "Bullet List",
      result: () => exec("insertUnorderedList")
    },
    {
      icon: <i class="icon-file-image" />,
      title: "Insert Image URL",
      result: () => {
        const url = window.prompt("Enter the image URL");
        if (url) {
          let html = `<img src="${url}" class="w3-image" />`;
          exec("insertHTML", html);
        }
      }
    },
    {
      icon: <i class="icon-link" />,
      title: "Create Link",
      result: () => {
        const url = window.prompt("Enter the link URL");
        if (url) exec("createLink", url);
      }
    },
    {
      icon: (
        <DropdownMenu
          icon="icon-font"
          items={[
            "Arial",
            "Helvetica",
            "Times New Roman",
            "Courier New",
            "Verdana",
            "Georgia",
            "Palatino",
            "Garamond",
            "Bookman",
            "Comic Sans MS",
            "Trebuchet MS",
            "Arial Black",
            "Impact"
          ]}
          result={(font, index) => exec("fontName", font)}
        />
      ),
      title: "Font",
      result: showDropdownMenu
    },
    {
      icon: (
        <DropdownMenu
          icon="icon-fontsize"
          items={[
            "Tiny",
            "Small",
            "Normal",
            "Bigger",
            "Large",
            "X-Large",
            "XX-Large"
          ]}
          result={(size, index) => exec("fontSize", index + 1)}
        />
      ),
      title: "Font Size",
      result: showDropdownMenu
    },
    {
      icon: (
        <DropdownMenu
          icon="icon-font w3-text-blue"
          content={<ColorMenu result={color => exec("forecolor", color)} />}
          offset={-120}
        />
      ),
      title: "Text Color",
      result: showDropdownMenu
    },
    {
      icon: (
        <DropdownMenu
          icon="icon-font w3-blue"
          content={<ColorMenu result={color => exec("hiliteColor", color)} />}
          offset={-120}
        />
      ),
      title: "Background Color",
      result: showDropdownMenu
    }
  ];
}

function ColorMenu({ result }) {
  let colors = [
    "4cb9ff",
    "68fce6",
    "7df945",
    "fffb5c",
    "ff8b82",
    "ff81be",

    "0098ff",
    "16e3c9",
    "56d330",
    "fadd2d",
    "ff5845",
    "ed549d",

    "006bb1",
    "009e92",
    "1ca702",
    "f8b102",
    "eb1e0f",
    "c42470",

    "004474",
    "01706b",
    "036601",
    "ff8802",
    "ac1600",
    "8e1854",

    "ffffff",
    "cccccc",
    "999999",
    "666666",
    "333333",
    "000000"
  ];
  let cells = [];
  let rows = [];
  colors.forEach((hex, index) => {
    let color = "#" + hex;
    let border = shadeColor(color, -20);
    let cell = (
      <button
        class="w3-round"
        style={{
          backgroundColor: color,
          width: 44,
          height: 28,
          borderStye: "solid",
          borderWidth: 1,
          marginRight: 2,
          borderColor: border
        }}
        onClick={e => {
          result && result(color);
          hideDropdowns();
          e.stopPropagation();
        }}
      />
    );
    cells.push(cell);
    if (cells.length === 6) {
      let row = (
        <div
          style={{
            marginBottom: 2,
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {cells}
        </div>
      );
      rows.push(row);
      cells = [];
    }
  });
  return <div class="w3-padding-small w3-light-grey">{rows}</div>;
}

function DropdownMenu({ items, result, icon, content, offset }) {
  return (
    <span class={`${icon || ""} dropdown`}>
      <div class="dropdown-content" style={{ left: offset || 0 }}>
        {items &&
          items.map((value, index) => (
            <div
              class="w3-padding-small w3-block w3-hover-grey"
              onClick={e => {
                result && result(value, index);
                hideDropdowns();
                e.stopPropagation();
              }}
              style={{
                whiteSpace: "nowrap",
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              {value}
            </div>
          ))}
        {content}
      </div>
    </span>
  );
}

function showDropdownMenu(e) {
  let button = e.target;
  let dropdownContent = button.firstElementChild;
  dropdownContent.classList.toggle("show");
}

export default HTMLEditor;
