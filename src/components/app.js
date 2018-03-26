import { h, Component } from "preact";
import { Router, route } from "preact-router";
import Head from "preact-head";

import Header from "./header";
import Drawer from "./drawer";
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
  <div class="u-window-box-medium">
    <h1 class="u-large">Ups {type}</h1>
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

    let clsDrawer = !openDrawer
      ? "o-drawer u-highest o-drawer--left"
      : "o-drawer u-highest o-drawer--left o-drawer--visible";

    let clsOverlay =
      openDrawer || openModal ? "c-overlay c-overlay--visible c-overlay--fullpage" : "c-overlay c-overlay--dismissable";

    return (
      <div id="app">
        <Head>
          <title>Sepulsa | {curPath}</title>
          <meta name="keywords" content="pulsa, paket data, token listrik, pln, bpjs, cicilan" />
          <meta name="description" content="bayar pulsa , beli paket data, beli token listrik, bayar listrik, bayar" />
        </Head>

        <div id="wrapper">
          {/* Header */}
          <Header showDrawer={this.showDrawer} goTo={this.goTo} toggleModal={this.toggleModal} />
          {/* Routers */}
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
            <Error type="404" default />
          </Router>

          <div class="o-drawer u-highest o-drawer--bottom fullwidth o-drawer--visible">
            <footer class="u-window-box-medium">
              <div class="u-centered">&copy; Azul ~ {curYear} </div>
            </footer>
          </div>
        </div>
        <Drawer open={openDrawer} goTo={this.goTo} hideDrawer={this.hideDrawer} />
        <div class={clsOverlay} onClick={this.dismisOverlay} />
        {!openModal ? (
          ""
        ) : (
          <div class="o-modal u-highest">
            <div class="c-card">
              <header class="c-card__header">
                <button type="button" class="c-button c-button--close" onClick={this.toggleModal}>
                  &times;
                </button>
                <h2 class="c-heading">Help</h2>
              </header>
              <div class="c-card__body">Why do you need help?</div>
              <footer class="c-card__footer">
                <button type="button" class="c-button c-button--brand" onClick={this.toggleModal}>
                  OK
                </button>
              </footer>
            </div>
          </div>
        )}
      </div>
    );
  }
}
