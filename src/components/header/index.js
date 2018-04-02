import "./style.css";

import { h, Component } from "preact";
import { Link } from "preact-router/match";
import logo from "../../assets/logo.png";
import Modal from "../modal";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import faQuestion from "@fortawesome/fontawesome-free-solid/faQuestion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class Header extends Component {
  constructor() {
    super();
    // set initial time:
    this.state.modalOpen = false;
    // this.state.count = 10;
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen, modalTitle: "Need Help?", modalContent: "Why do you need help" });
  };

  render(props, { modalOpen, modalTitle, modalContent }) {
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
              src={logo}
              onClick={() => props.goTo("/")}
            />
          </section>
          <section class="navbar-section">
            <button class="btn btn-action btn-trans" role="button" onClick={this.toggleModal}>
              <FontAwesomeIcon icon={faQuestion} />
            </button>
          </section>
        </header>
        <Modal active={modalOpen} title={modalTitle} content={modalContent} toggleModal={this.toggleModal} />
      </div>
    );
  }
}
