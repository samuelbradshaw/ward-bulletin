import { h, Component } from "preact";
import BulletinData from "../../data/bulletindata";
import { Page } from "../../components";

class LoadTemplate extends Component {
  state = {
    templates: null,
    error: null,
    loaderMessage: null
  };
  unit;

  componentDidMount() {
    this.getTemplates();
  }

  componentDidUpdate() {
    this.getTemplates();
  }

  render({ unit }, { templates, error, loaderMessage }) {
    if (unit !== this.unit) {
      // different unit
      templates = null;
    }
    this.unit = unit;

    const gotTemplates = templates !== null;
    let showLoader = (!gotTemplates && !error) || this.state.showLoader;
    let content;

    if (gotTemplates) {
      if (templates.length) {
        content = (
          <ul class="w3-ul">
            {templates.map(templateName => (
              <li
                style={{ cursor: "pointer" }}
                onClick={e => this.getTemplate(unit, templateName)}
              >
                {templateName}
              </li>
            ))}
          </ul>
        );
      } else {
        content = "No templates have been saved";
      }
    } else if (error) {
      content = (
        <div class="w3-panel w3-pale-red">
          <h4>Error</h4>
          <p>{error.toString()}</p>
        </div>
      );
    }

    return (
      <Page
        title="Load Template"
        showLoader={!!loaderMessage}
        message={loaderMessage}
      >
        <h4>Load Template</h4>
        <div class="w3-card w3-container">{content}</div>
        <p />
      </Page>
    );
  }

  getTemplates() {
    if (
      !this.state.templates &&
      !this.state.error &&
      !this.state.loaderMessage
    ) {
      this.setState({ loaderMessage: "Getting template list" });
      BulletinData.getTemplates(this.props.unit)
        .then(templates => {
          templates.sort();
          this.setState({ templates, loaderMessage: null });
        })
        .catch(error => this.setState({ error, loaderMessage: null }));
    }
  }

  getTemplate(unit, title) {
    this.setState({ loaderMessage: "Loading template" });
    BulletinData.getTemplate(unit, title)
      .then(data => this.props.select(data))
      .catch(error => this.setState({ error, loaderMessage: null }));
  }
}

export default LoadTemplate;
