import { h, Component } from "preact";
import { Router } from "preact-router";

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
        <Router onChange={this.handleRoute}>
          {/* <Home path="/" /> */}
          <Bulletin path="/" />
          <Editor path="/editor/" />
          <Bulletin path="/bulletin/:unit" />
        </Router>
      </div>
    );
  }
}
