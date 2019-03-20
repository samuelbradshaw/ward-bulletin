import { h, Component } from "preact";
import { Router } from "preact-router";
import Match from "preact-router/match";
import platform from "mini-platform-detect";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Bulletin from "../routes/bulletin";
import Editor from "../routes/editor";
import Locate from "../routes/locate";
import Search from "../routes/search";
import ViewHymn from "../routes/bulletin/hymn-view";
import Test from "../routes/home/test";

import prefs from "../data/prefs";
import { setThemeColor } from "../components";
import printCheck from "../misc/print-check";
import "../misc/helper";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */

  state = { printing: false };

  componentWillMount() {
    let color = prefs.get(prefs.themeColor);
    if (color && color !== "blue") {
      setThemeColor(color);
    }
  }

  componentDidMount() {
    // prompt user to install app on home screen
    if (platform.chrome) {
      window.addEventListener("beforeinstallprompt", event => {
        // Prevent Chrome <= 67 from automatically showing the prompt
        event.preventDefault();
        event.prompt();
        // Wait for the user to respond to the prompt
        // event.userChoice.then(handleInstall);
      });
    }

    printCheck.onChange = printing => this.setState({ printing });
  }

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Home path="/home/" />
          <Editor path="/editor/" />
          <Editor path="/editdemo/" editdemo />
          <Locate path="/locate/" />
          <Search path="/search/" />
          <Test path="/test/" />
          <Bulletin path="/#:unit" />
          <ViewHymn path="/hymn/:hymn" />
        </Router>
      </div>
    );
  }
}
