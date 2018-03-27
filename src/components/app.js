import { h, Component } from "preact";
import { Router, route } from "preact-router";
import Head from "preact-head";
import LazyLoad from "react-lazyload";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

import Header from "./header";
import Drawer from "./drawer";
import Clock from "./drawer";
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

/** fall-back route (handles unroutable URLs) */
const Error = ({ type, url }) => (
  <div>
    <h1>Ups {type}</h1>
    {type === "404" ? <p>URL not found.</p> : ""}
    <pre>{url}</pre>
  </div>
);

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
        <a class="off-canvas-toggle btn btn-action btn-trans" href="#sidebar-id">
          <FontAwesomeIcon icon={faBars} />
        </a>

        <Drawer goTo={this.goTo} />

        <a class="off-canvas-overlay" href="#close" />

        <div class="off-canvas-content">
          <Header />
          <div class="container">
            <div class="columns">
              <Home />
            </div>
          </div>
          <footer>
            <div className="container">
              <Clock />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
