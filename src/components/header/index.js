import "./style.css";

import { h, Component } from "preact";
import { Link } from "preact-router/match";
import logo from "../../assets/logo.png";
import Modal from "../modal";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import faQuestion from "@fortawesome/fontawesome-free-solid/faQuestion";
import LazyLoad from "react-lazyload";

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

  render({}, { modalOpen, modalTitle, modalContent }) {
    return (
      <div id="header">
        <header class="navbar">
          <section class="navbar-section redtext">...</section>
          <section class="navbar-center">
            <LazyLoad height={40} width={118}>
              <img src={logo} alt="LOGO" />
            </LazyLoad>
          </section>
          <section class="navbar-section">
            <button class="btn btn-action btn-trans" onClick={this.toggleModal}>
              <FontAwesomeIcon icon={faQuestion} />
            </button>
          </section>
        </header>
        <Modal active={modalOpen} title={modalTitle} content={modalContent} toggleModal={this.toggleModal} />
      </div>
    );
  }
}
