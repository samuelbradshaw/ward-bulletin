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
