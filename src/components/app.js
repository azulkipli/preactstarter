import { h, Component } from "preact";
import { Router, route } from "preact-router";
import Head from "preact-head";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

// Unistore
import { connect } from "unistore/preact";
import actions from "../store/actions";
// Unistore

// Components
import Header from "./header";
import Drawer from "./drawer";
import Clock from "./clock";
import Error from "./error";
import Modal from "./modal";
// import Home from "../routes/home";
// import Profile from "../routes/profile";
import Home from "async!../routes/home";
import Profile from "async!../routes/profile";
// Components

// Hotreload
if (module.hot) {
  require("preact/debug");
}
// Hotreload

const jsUcfirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
// Utils

class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  goTo = pathname => {
    route(pathname);
    if (this.props.drawerActive) {
      this.props.hideDrawer();
    }
  };

  render(props, {}) {
    // console.log("App props", props);
    const currentUrl = Router.getCurrentUrl();
    const paths = currentUrl.split("/");
    const curPath = paths[1] === "" ? "Home" : jsUcfirst(paths[1]);
    return (
      <div id="app" class="off-canvas">
        <button class="off-canvas-toggle btn btn-action btn-trans" role="button" onClick={props.toggleDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <a class="off-canvas-overlay" onClick={props.hideDrawer} />

        <div class="off-canvas-content">
          <Header goTo={this.goTo} showModal={props.showModal} />
          <div class="container grid-md">
            <Router onChange={this.handleRoute}>
              <Home path="/" />
              <Profile path="/profile/" user="me" />
              <Profile path="/profile/:user" />
              <Error type="404" default />
            </Router>
          </div>
          <footer class="container">
            <div class="footertext">
              <Clock />
            </div>
          </footer>
        </div>
        <Modal />
        <Drawer goTo={this.goTo} hideDrawer={props.hideDrawer} active={props.drawerActive} />
      </div>
    );
  }
}

// export default App;
export default connect("count, login, modalActive, modalTitle, modalContent, drawerActive", actions)(App);
