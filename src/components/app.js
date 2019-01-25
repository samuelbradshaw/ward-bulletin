import { h, Component } from "preact";
import { Router } from "preact-router";
import Helmet from "preact-helmet";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Bulletin from "../routes/bulletin";
import Editor from "../routes/editor";
import Locate from "../routes/locate";
import Search from "../routes/search";

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
        <Helmet title="Ward Bulletin" />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Editor path="/editor/" />
          <Locate path="/locate/" />
          <Search path="/search/" />
          <Bulletin path="/bulletin/" />
          <Bulletin path="/:unit" />
        </Router>
      </div>
    );
  }
}
