import { h, Component } from "preact";
import { Router, route } from "preact-router";
import Head from "preact-head";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

import Header from "./header";
import Drawer from "./drawer";
import Clock from "./clock";
import Error from "async!./error";
// import Home from "../routes/home";
// import Profile from "../routes/profile";
import Home from "async!../routes/home";
import Profile from "async!../routes/profile";

if (module.hot) {
  require("preact/debug");
}

const now = Date.now();
const curYear = new Date(now).getFullYear("Y");

const jsUcfirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */

  state = {
    openDrawer: false,
    openModal: false
  };

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  showDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer });
  };

  hideDrawer = () => {
    this.setState({ openDrawer: false });
  };

  dismisOverlay = () => {
    this.setState({ openDrawer: false, openModal: false });
  };

  goTo = pathname => {
    route(pathname);
    if (this.state.openDrawer) {
      this.hideDrawer();
    }
  };

  toggleModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  render(props, { openDrawer, openModal }) {
    const currentUrl = Router.getCurrentUrl();
    const paths = currentUrl.split("/");
    const curPath = paths[1] === "" ? "Home" : jsUcfirst(paths[1]);
    return (
      <div id="app" class="off-canvas">
        <a class="off-canvas-toggle btn btn-action btn-trans" onClick={this.showDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </a>

        <a class="off-canvas-overlay" onClick={this.hideDrawer} />

        <div class="off-canvas-content">
          <Header goTo={this.goTo} />
          <div class="container">
            <div class="columns">
              <Router onChange={this.handleRoute}>
                <Home path="/" />
                <Profile path="/profile/" user="me" />
                <Profile path="/profile/:user" />
                <Error type="404" default />
              </Router>
            </div>
          </div>
          <footer class="container">
            <div class="footertext" className="p4">
              <Clock />
            </div>
          </footer>
        </div>

        <Drawer goTo={this.goTo} hideDrawer={this.hideDrawer} active={openDrawer} />
      </div>
    );
  }
}
