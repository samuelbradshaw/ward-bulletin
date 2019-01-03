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
      let sections = [];
      for (let sectionid of data.sectionOrder) {
        let sectionData = data.sections[sectionid];
        if (sectionData) {
          if (sections.length) {
            sections.push(divider());
          }
          sections.push(addSection(sectionData));
        }
      }

      return (
        <div>
          <Header title={data.unit} />
          <div class={style.bulletin + " pagecontent + w3-content"}>
            {sections}
          </div>
        </div>
      );
    } else {
      // no data yet, show loader
      return <Header title="Ward Bulletin" />;
    }
  }
}

let divider = () => <hr class="w3-border w3-border-blue" />;

let addSection = data => {
  let sections = data.map(dataitem => createLine(dataitem));
  return sections;
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
      let sectionstyle = {};
      if (centerStyle == "bold") {
        sectionstyle.fontWeight = "bold";
      } else if (centerStyle == "italic") {
        sectionstyle.fontStyle = "italic";
      }

      line2 = (
        <div class={style.center} style={sectionstyle}>
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
