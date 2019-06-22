import { h, Component } from "preact";
import style from "./style";
import prefs from "../../data/prefs";
import { route } from "preact-router";
import printCheck from "../../misc/print-check";
import { setStyleCSS } from "../../misc/helper";
import styleCSS from "./bulletin-style.txt";

export default class BulletinView extends Component {
  state = { hymn: null };

  render({ data, hideSections }) {
    // setup styles
    setStyleCSS(data.settings.style || styleCSS, "bulletin-styles");

    if (printCheck.printing && data.settings.printColumns != 1) {
      // printing
      return this.renderPrint(data);
    }

    let sections = [];
    for (let section of data.sections) {
      if (!(hideSections && section.hidden)) {
        if (sections.length) {
          sections.push(divider());
        }
        sections.push(addSection(section.data));
      }
    }
    var themeBackgroundColor = prefs.get(prefs.themeBackgroundColor);
    if (themeBackgroundColor == "light") {
      var w3class = "w3-white";
    } else if (themeBackgroundColor == "dark") {
      var w3class = "w3-black";
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      var w3class = "w3-black";
    } else {
      var w3class = "w3-white";
    }
    return (
      <div class={style.bulletin + " w3-container " + w3class + " bulletin-body"}>{sections}</div>
    );
  }

  renderPrint(data) {
    let sections = {};
    data.sections.forEach(section => {
      sections[section.type] = section;
    });
    let {
      cover,
      program,
      announcements,
      calendar,
      leaders,
      missionaries,
      lessons,
      information,
      classes
    } = sections;

    // right column is program and cover
    let pageBreak = <div style={{ pageBreakAfter: "always" }} />;
    let colBreak = <div style={{ breakBefore: "column" }} />;
    let programSection = program ? addSection(program.data) : [];
    let coverSection = cover ? addSection(cover.data) : [];
    let rightColumn = [
      ...programSection,
      pageBreak,
      <div style={{ breakInside: "avoid" }}>{coverSection}</div>
    ];

    // left column is everything else
    let leftColumn = [];
    for (let section of [
      announcements,
      calendar,
      leaders,
      missionaries,
      lessons,
      information,
      classes
    ]) {
      if (section) {
        leftColumn = leftColumn.concat(addSection(section.data));
      }
    }
    if (!leftColumn.length) {
      leftColumn = [<div>&#160;</div>];
    }

    // 2 pages per print page
    let centerMargin = `${data.settings.centerMargin}in`;
    let edgeMargin = `${data.settings.edgeMargin}in`;
    let leftStyle = {
      paddingLeft: edgeMargin,
      paddingRight: centerMargin
    };
    let rightStyle = {
      paddingLeft: centerMargin,
      paddingRight: edgeMargin
    };
    return (
      <div class="w3-row">
        <div class="w3-half" style={leftStyle}>
          {leftColumn}
        </div>
        <div class="w3-half" style={rightStyle}>
          {rightColumn}
        </div>
      </div>
    );
  }
}

let divider = () => <hr class="w3-border w3-border-theme" />;

let addSection = (data = []) => {
  let lines = [];
  let events = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let line = createLine(item);
    if (item.type === "event") {
      // special case for calendar events
      events.push(line);
      continue;
    } else if (events.length) {
      // save event group
      let table = <table class="calendar">{events}</table>;
      lines.push(table);
      events = [];
    }
    lines.push(line);
  }
  if (events.length) {
    // save event group
    let line = <table class="calendar">{events}</table>;
    lines.push(line);
  }

  return lines;
};

let createLine = item => {
  let line1 = null;
  let line2 = null;
  let { type, label, name, title } = item;
  let itemStyle = {};
  let onClick;

  switch (type) {
    case "title":
    case "date":
      line1 = alignLine(title, item.style, item.align, item.size);
      break;

    case "name":
      line1 = nameLine(label, name, type);
      break;

    case "image":
      const justify = justifyStyle(item.align);
      line1 = (
        <div style={{ display: "flex", justifyContent: justify }}>
          <img
            src={item.url}
            class="w3-image w3-round"
            style={{ width: `${item.width || 80}%`, height: "100%" }}
          />
        </div>
      );
      break;

    case "hymn":
      line1 = nameLine(label, item.hymn, type);
      line2 = <div class="bulletin-hymn-title">{title}</div>
      onClick = event => viewHymn(item);
      itemStyle = { cursor: "pointer" };
      break;

    case "music":
      line1 = nameLine(label, name, type);
      line2 = <div class="bulletin-music-title">{title} </div>
      break;

    case "columns":
      let { count, data } = item;
      let cells = data ? data.trim().split("\n") : [];
      let rowCount = Math.floor((cells.length + count - 1) / count);
      let rows = [];
      let className = ["w3-col", "w3-half", "w3-third", "w3-quarter"][
        count - 1
      ];
      for (let rowIdx = 0; rowIdx < rowCount; rowIdx++) {
        let cols = [];
        for (let colIdx = 0; colIdx < count; colIdx++) {
          let value = cells[rowIdx + colIdx * rowCount] || "\xa0";
          let cell = (
            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              class={className}
            >
              {value}
            </span>
          );
          cols.push(cell);
        }
        let row = <div class="w3-row">{cols}</div>;
        rows.push(row);
      }
      line1 = <div class="w3-container">{rows}</div>;
      break;

    case "article":
    case "styledtext":
    case "markdown":
      let { heading, body } = item;
      line1 = heading && <div class={`${style.heading} bulletin-${type}-heading`}>{heading}</div>;
      line2 = <div dangerouslySetInnerHTML={{ __html: body }} />;
      break;

    case "pagebreak":
      line1 = <div class="pagebreak" />;
      break;

    case "gap":
      let gap = printCheck.printing ? item.printgap || 0 : item.gap || 0;
      itemStyle = { marginTop: `${gap / 4.0}em` };
      break;

    case "event":
      let { day, weekday, time, event } = item;
      line1 = (
        <tr class="bulletin-event">
          <td class="padding-tiny-lr w3-right-align bulletin-event-day">{day}</td>
          <td class="padding-tiny-lr bulletin-event-weekday">{weekday}</td>
          <td class="padding-tiny-lr w3-right-align bulletin-event-time">{time}</td>
          <td class="padding-tiny-lr bulletin-event-event">{event}</td>
        </tr>
      );
      return line1;
      break;
  }

  return (
    <div
      class={`bulletin-item ${style.entry} bulletin-${type}`}
      style={itemStyle}
      onClick={onClick}
    >
      {line1}
      {line2}
    </div>
  );
};

function justifyStyle(alignType) {
  return alignType === "left"
    ? "flex-start"
    : alignType === "right"
      ? "flex-end"
      : "center";
}

function alignLine(title, styleType, alignType, size) {
  let lineStyle = {};
  if (styleType == "bold") {
    lineStyle.fontWeight = "bold";
  } else if (styleType == "italic") {
    lineStyle.fontStyle = "italic";
  }
  const justify = justifyStyle(alignType);
  if (size) {
    lineStyle.fontSize = size;
  }
  return (
    <div class={style.align} style={{ ...lineStyle, justifyContent: justify }}>
      <span>{title}</span>
    </div>
  );
}

function nameLine(label, name, type) {
  let leader = prefs.get(prefs.leaderChar).repeat(200);
  return (
    <div class={style.line}>
      <span class={`${style.left} bulletin-${type}-left`}>{label}</span>
      <span leader={leader} class={style.dots} />
      <span class={`${style.right} bulletin-${type}-right`}>{name}</span>
    </div>
  );
}

function viewHymn({ uri, hymn }) {
  var hymnApp = prefs.get(prefs.hymnApp);
  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;
  var Android = navigator.userAgent.match(/Android/g) ? true : false;
  if (hymnApp == "sacred-music") {
    if (iOS || Android) {
      window.location.href = `sacredmusic://content/manual/hymns/${uri}`;
    } else {
      window.open(`https://www.churchofjesuschrist.org/music/library/hymns/${uri}`);
    }
  } else if (hymnApp == "gospel-library") {
    if (iOS || Android) {
      window.location.href = `gospellibrary://content/manual/hymns/${uri}`;
    } else {
      window.open(`https://www.churchofjesuschrist.org/study/manual/hymns/${uri}`);
    }
  } else {
    route(`/hymn/${hymn}`);
  }
}
