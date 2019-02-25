import { h, Component } from "preact";
import style from "./style";
import prefs from "../../data/prefs";

export default class BulletinView extends Component {
  render({ data }) {
    let sections = [];
    for (let section of data.sections) {
      if (sections.length) {
        sections.push(divider());
      }
      sections.push(addSection(section.data));
    }
    return (
      <div class={style.bulletin + " w3-container w3-white"}>{sections}</div>
    );
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
  let itemStyle = {};
  let onClick;

  switch (type) {
    case "title":
      line1 = alignLine(title, item.style, item.align);
      break;

    case "name":
      line1 = nameLine(label, name);
      break;

    case "hymn":
      line1 = nameLine(label, item.hymn);
      line2 = centerLine(title, "italic");
      onClick = event => viewHymn(item.uri);
      itemStyle = { cursor: "pointer" };
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
      itemStyle = { marginTop: `${gap / 4.0}em` };
      break;
  }

  return (
    <div class={style.entry} style={itemStyle} onClick={onClick}>
      {line1}
      {line2}
    </div>
  );
};

function alignLine(title, styleType, alignType) {
  let lineStyle = {};
  if (styleType == "bold") {
    lineStyle.fontWeight = "bold";
  } else if (styleType == "italic") {
    lineStyle.fontStyle = "italic";
  }
  const justify =
    alignType === "left"
      ? "flex-start"
      : alignType === "right"
      ? "flex-end"
      : "center";
  return (
    <div class={style.align} style={{ ...lineStyle, justifyContent: justify }}>
      <span>{title}</span>
    </div>
  );
}

function centerLine(title, styleType) {
  return alignLine(title, styleType, "center");
}

function nameLine(label, name) {
  let leader = (prefs.get(prefs.leaderChar) || " .").repeat(100);
  return (
    <div class={style.line}>
      <span class={style.left}>{label}</span>
      <span leader={leader} class={style.dots} />
      <span class={style.right}>{name}</span>
    </div>
  );
}

function viewHymn(uri) {
  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
  var Android = navigator.userAgent.match(/Android/g) ? true : false;
  if (iOS || Android) {
    window.location.href = `ldsmusic://content/manual/hymns/${uri}`;
  } else {
    window.open(`https://www.lds.org/music/library/hymns/${uri}`);
  }
}
