import { Component } from "preact";
import style from "./style";
import BulletinData from "../../data/bulletindata";
import Header from "../../components/header";
import { presentLoading } from "../../components/helper";

export default class Bulletin extends Component {
  state = {
    data: null
  };

  // gets called when this route is navigated to
  async componentDidMount() {
    // get data
    // let loader = await presentLoading({ message: "Loading..." });
    let data = await BulletinData.getBulletinData(this.props.unit);
    // loader.dismiss();
    this.setState({ data });
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ unit }, { data }) {
    if (data) {
      let lines = addSection(data.sections.program);
      lines.push(divider());
      lines = lines.concat(addSection(data.sections.announcements));
      return (
        <div>
          <Header title={data.unit} />
          <div class={style.bulletin}>{lines}</div>
        </div>
      );
    } else {
      // no data yet, show loader
      return <Header title="Ward Bulletin" />;
    }
  }
}

let divider = () => <hr style={{ marginTop: 32, marginBottom: 32 }} />;

let addSection = data => {
  let lines = data.map(dataitem => createLine(dataitem));
  return lines;
};

let createLine = dataitem => {
  let line1 = [null];
  let line2 = null;

  let { left, right, center, centerStyle, gap, heading, text } = dataitem;
  if (heading) {
    line1 = <div class={style.heading}>{heading}</div>;
    line2 = text;
  } else {
    if (left) {
      let content = [<span class={style.left}>{left}</span>];
      if (right) {
        content.push(<span class={style.dots} />);
        content.push(<span class={style.right}>{right}</span>);
      }
      line1 = <div class={style.line}>{content}</div>;
    }
    if (center) {
      let lineStyle = {};
      if (centerStyle == "bold") {
        lineStyle.fontWeight = "bold";
      } else if (centerStyle == "italic") {
        lineStyle.fontStyle = "italic";
      }

      line2 = (
        <div class={style.center} style={lineStyle}>
          <span>{center}</span>
        </div>
      );
    }
  }

  let gapStyle = {};
  if (gap) {
    gapStyle.marginTop = 15 * gap;
  }

  return (
    <div class={style.entry} style={gapStyle}>
      {line1}
      {line2}
    </div>
  );
};
