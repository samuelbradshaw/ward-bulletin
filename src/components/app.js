import { h, Component } from "preact";
import { Router } from "preact-router";
import Helmet from "preact-helmet";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Bulletin from "../routes/bulletin";
import Editor from "../routes/editor";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Helmet
          title="Ward Bulletin"
          link={[
            {
              rel: "stylesheet",
              href:
                "https://unpkg.com/@ionic/core@4.0.0-rc.0/css/ionic.bundle.css"
            }
          ]}
          script={[
            {
              src: "https://unpkg.com/@ionic/core@4.0.0-rc.0/dist/ionic.js",
              type: "text/javascript"
            }
          ]}
        />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Editor path="/editor/" />
          <Bulletin path="/bulletin/" />
          <Bulletin path="/bulletin/:unit" />
        </Router>
      </div>
    );
  }
}
