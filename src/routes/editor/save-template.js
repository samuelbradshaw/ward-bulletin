import { h, Component } from "preact";
import style from "./style";
import { Loader } from "../../components";
import BulletinData from "../../data/bulletindata";

class SaveTemplate extends Component {
  state = {
    sections: ["Program"],
    showLoader: false
  };

  render({ data }, { sections, showLoader }) {
    let sectionList = (
      <ul class="w3-ul w3-border w3-border-theme">
        {data.sections.map(({ title }) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={e => this.toggleSection(title)}
          >
            <input
              class="w3-check"
              type="checkbox"
              checked={sections.includes(title)}
            />
            {title}
          </li>
        ))}
      </ul>
    );

    return (
      <div>
        <h4>Save Template</h4>
        <div class="w3-card w3-container">
          <p>
            Save one or sections of this bulletin as a template that can later
            be loaded into a bulletin. For example, save the Program section for
            fast and testimony meeting, Primary children's program, Christmas
            program, etc.
          </p>
          <label class={`${style.label} w3-block`}>Template Name</label>
          <input
            id="template-name"
            class={`${style.textinput} w3-border w3-border-theme w3-round`}
            type="text"
            autofocus
            onChange={e => this.setState({ name: e.target.value })}
          />
          <p />

          <label class={`${style.label} w3-block`}>Sections to Save</label>
          {sectionList}
          <p />

          <button
            class="w3-btn w3-theme w3-round w3-border"
            onClick={() => this.save()}
          >
            Save Template
          </button>

          <p />
        </div>
        <Loader showLoader={showLoader} />
      </div>
    );
  }

  save() {
    let title = document.getElementById("template-name").value;
    if (!title.length) {
      alert("Please enter a name for this template");
      return;
    }

    this.setState({ showLoader: true });

    let { unit, data, complete, firebase } = this.props;
    let sectionData = this.state.sections.map(sectionName =>
      data.sections.find(section => section.title === sectionName)
    );
    var user = firebase.auth().currentUser;
    user.getIdToken().then(token => {
      BulletinData.saveTemplate(unit, title, sectionData, token).then(() => {
        this.setState({ showLoader: false });
        if (complete) {
          complete();
        }
        setTimeout(() => alert(`Template "${title}" has been saved`), 100);
      });
    });
  }

  toggleSection(section) {
    let { sections } = this.state;
    if (sections.includes(section)) {
      // remove
      let index = sections.indexOf(section);
      if (index !== -1) sections.splice(index, 1);
    } else {
      // add
      sections.push(section);
    }
    this.setState({ sections });
  }
}

export default SaveTemplate;
