import { h, Component } from "preact";
import { Link } from "preact-router/match";
import logo from "../../assets/logo.png";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import faQuestion from "@fortawesome/fontawesome-free-solid/faQuestion";

export default class Header extends Component {
  render(props, state) {
    return (
      <div id="header" class="o-grid">
        <div class="o-grid__cell u-center-block">
          <div class="u-center-block__content left">
            <a class="u-medium u-color-white" onClick={props.showDrawer}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>
        <div class="o-grid__cell u-center-block ">
          <a class="u-centered" onClick={() => props.goTo("/")}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div class="o-grid__cell u-center-block">
          <div class="u-center-block__content right">
            <a class="u-medium u-color-white" onClick={props.toggleModal}>
              <FontAwesomeIcon icon={faQuestion} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
