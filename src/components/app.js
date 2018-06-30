import { h, Component } from "preact";
import { Router } from "preact-router";
import Head from "preact-head";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

// import Header from './header';
// import Home from '../routes/home';
// import Profile from '../routes/profile';
import Home from "async!../routes/home";
import Login from "async!../routes/login";
import Profile from "async!../routes/profile";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  state = {
    isMenuOpened: false,
    isAuthenticated: false,
    menuOpen: false
  };
  handleRoute = e => {
    this.currentUrl = e.url;
  };
  handleClick = e => {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  };
  toggleMenu = e => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  closeMenu = e => {
    this.setState({ sidebarWidth: 0 });
  };
  authenticate = e => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  componentDidMount = () => {
    const elem = document.getElementById("app_preload");
    window.onload = () => {
      if (elem) {
        elem.remove();
      }
    };
  };
  render({}, state) {
    const { isAuthenticated } = state;
    return (
      <div id="app">
        <Head>
          <title>Chengho PWA</title>
          <meta name="description" content="Progressive Web App using PreactJS" />
          <meta name="keywords" content="pwa, preact, unistore, code-splitting, hot-reload" />
          <meta name="author" content="Azul" />
        </Head>
        <div class="app-container">
          <Router onChange={this.handleRoute}>
            {isAuthenticated ? (
              <Home path="/" {...state} authenticate={this.authenticate} toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} />
            ) : (
              <Login path="/" {...state} authenticate={this.authenticate} />
            )}
            <Profile path="/profile/:user" />
            <Error type="404" default />
          </Router>
        </div>
      </div>
    );
  }
}
