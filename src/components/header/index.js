import "./style.css";

import { h, Component } from "preact";
import { Link } from "preact-router/match";
import logo from "../../assets/logo.png";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import faQuestion from "@fortawesome/fontawesome-free-solid/faQuestion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Header extends Component {
  render(props, {}) {
    return (
      <div id="header">
        <header class="navbar">
          <section class="navbar-section redtext">...</section>
          <section class="navbar-center">
            <LazyLoadImage
              effect="blur"
              alt="LOGO"
              height={40}
              width={118}
              delayTime={100}
              onClick={() => props.goTo("/")}
            />
          </section>
          <section class="navbar-section">
            <button class="btn btn-action btn-trans" role="button" onClick={() => props.showModal()}>
              <FontAwesomeIcon icon={faQuestion} />
            </button>
          </section>
        </header>
      </div>
    );
  }
}
