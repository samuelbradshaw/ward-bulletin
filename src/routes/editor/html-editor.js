import { h, Component } from "preact";
import { init, exec } from "pell";
import "pell/dist/pell.min.css";

let uniqueId = 1;

class HTMLEditor extends Component {
  editor = null;

  constructor(props) {
    super(props);
    this.editorId = `editor-${uniqueId++}`;
  }

  componentDidMount() {
    this.editor = init({
      element: document.getElementById(this.editorId),
      onChange: this.props.onChange,
      actions: [
        {
          name: "undo",
          icon: '<i class="icon-ccw" />',
          result: () => exec("undo")
        },
        {
          name: "redo",
          icon: '<i class="icon-cw" />',
          result: () => exec("redo")
        },
        {
          name: "bold",
          icon: '<i class="icon-bold" />',
          result: () => exec("bold")
        },
        {
          name: "underline",
          icon: '<i class="icon-underline" />',
          result: () => exec("underline")
        },
        {
          name: "italic",
          icon: '<i class="icon-italic" />',
          result: () => exec("italic")
        },
        {
          name: "strikethrough",
          icon: '<i class="icon-strike" />',
          result: () => exec("strikethrough")
        },
        {
          name: "align-left",
          icon: '<i class="icon-align-left" />',
          result: () => exec("justifyLeft")
        },
        {
          name: "align-center",
          icon: '<i class="icon-align-center" />',
          result: () => exec("justifyCenter")
        },
        {
          name: "align-right",
          icon: '<i class="icon-align-right" />',
          result: () => exec("justifyRight")
        },
        {
          name: "align-full",
          icon: '<i class="icon-align-justify" />',
          result: () => exec("justifyFull")
        },
        {
          name: "indent-right",
          icon: '<i class="icon-indent-right" />',
          result: () => exec("indent")
        },
        {
          name: "indent-left",
          icon: '<i class="icon-indent-left" />',
          result: () => exec("outdent")
        },
        {
          name: "olist",
          icon: '<i class="icon-list-numbered" />',
          result: () => exec("insertOrderedList")
        },
        {
          name: "ulist",
          icon: '<i class="icon-list-bullet" />',
          result: () => exec("insertUnorderedList")
        },
        "line",
        {
          name: "image",
          icon: '<i class="icon-file-image" />',
          result: () => {
            const url = window.prompt("Enter the image URL");
            if (url) {
              let html = `<img src="${url}" class="w3-image" />`;
              exec("insertHTML", html);
            }
          }
        },
        {
          name: "link",
          icon: '<i class="icon-link" />',
          result: () => {
            const url = window.prompt("Enter the link URL");
            if (url) exec("createLink", url);
          }
        },
        {
          name: "font",
          icon: `
            <select id="font-select" onchange="this.parentElement.onclick(this)">
              <option selected disabled>Font</option>
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>/>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>/>
              <option value="Palatino">Palatino</option>
              <option value="Garamond">Garamond</option>
              <option value="Bookman">Bookman</option>
              <option value="Comic Sans MS">Comic Sans</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
              <option value="Arial Black">Arial Black</option>
              <option value="Impact">Impact</option>
            </select>`,
          result: () => {
            let value = document.getElementById("font-select").value;
            exec("fontName", value);
          }
        },
        {
          name: "size",
          icon: `
            <select id="fontsize-select" onchange="this.parentElement.onclick(this)">
              <option selected disabled>Size</option>
              <option value="1">Tiny</option>
              <option value="2">Small</option>
              <option value="3">Regular</option>
              <option value="4">Bigger</option>
              <option value="5">Large</option>
              <option value="6">X-Large</option>
              <option value="7">XX-Large</option>
            </select>`,
          result: () => {
            let value = document.getElementById("fontsize-select").value;
            console.log("Font size", value);
            exec("fontSize", value);
          }
        }
      ]
    });

    this.editor.lastChild.innerHTML = this.props.html;
  }

  render() {
    return <div id={this.editorId} className="pell" />;
  }
}

export default HTMLEditor;
