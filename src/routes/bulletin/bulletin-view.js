import { h, Component } from "preact";
import style from "./style";

export default class BulletinView extends Component {
  render({ data }) {
    let sections = [];
    for (let sectionid of data.sectionOrder) {
      let section = data.sections[sectionid];
      if (section) {
        if (sections.length) {
          sections.push(divider());
        }
        sections.push(addSection(section.data));
      }
    }

    return <div class={style.bulletin + "w3-content"}>{sections}</div>;
  }
}

let divider = () => <hr class="w3-border w3-border-theme" />;

let addSection = data => {
  let sections = data.map(item => createLine(item));
  return sections;
};

let createLine = item => {
  let line1 = null;
  let line2 = null;
  let { type, label, name, title } = item;
  let gapStyle = {};

  switch (type) {
    case "title":
      line1 = centerLine(title, item.style);
      break;

    case "name":
      line1 = nameLine(label, name);
      break;

    case "hymn":
      line1 = nameLine(label, item.hymn);
      line2 = centerLine(title, "italic");
      break;

    case "music":
      line1 = nameLine(label, name);
      line2 = centerLine(title, "italic");
      break;

    case "columns":
      break;

    case "article":
      let { heading, body } = item;
      line1 = heading && <div class={style.heading}>{heading}</div>;
      line2 = body;
      break;

    case "pagebreak":
      line1 = <div class="pagebreak" />;
      break;

    case "gap":
      let gap = item.gap || 1.0;
      gapStyle = { marginTop: `${gap / 4.0}em` };
      break;
  }

  return (
    <div class={style.entry} style={gapStyle}>
      {line1}
      {line2}
    </div>
  );
};

function centerLine(title, styleType) {
  let lineStyle = {};
  if (styleType == "bold") {
    lineStyle.fontWeight = "bold";
  } else if (styleType == "italic") {
    lineStyle.fontStyle = "italic";
  }
  return (
    <div class={style.center} style={lineStyle}>
      <span>{title}</span>
    </div>
  );
}

function nameLine(label, name) {
  return (
    <div class={style.line}>
      <span class={style.left}>{label}</span>
      <span class={style.dots} />
      <span class={style.right}>{name}</span>
    </div>
  );
}
