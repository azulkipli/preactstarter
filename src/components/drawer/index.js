import { h, Component } from "preact";
import Router from "preact-router";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faSignOutAlt from "@fortawesome/fontawesome-free-solid/faSignOutAlt";

export default class Drawer extends Component {
  isActive = pathname => {
    const path = pathname.split("/");
    const curUrl = Router.getCurrentUrl();
    let path1 = "/" + path[1];

    if (path1 === curUrl) {
      return "c-card__item c-card__item--active";
    } else {
      return "c-card__item";
    }
  };
  render(props, {}) {
    let clsDrawer = !props.open
      ? "o-drawer u-highest o-drawer--left"
      : "o-drawer u-highest o-drawer--left o-drawer--visible";
    let clsItem = "c-card__item";
    return (
      <div class={clsDrawer}>
        <div class="c-card">
          <header class="c-card__header">
            <div class="c-avatar u-medium u-center-block__content topleft" data-text="Az" />
            <h2 class="u-medium u-window-box-none u-center-block__content topcenter">
              <a onClick={() => props.goTo("/profile/azul")}>
                Acep Zulkipli
                <div class="c-heading__sub u-window-box-none u-medium">azul@sepulsa.id</div>
              </a>
            </h2>

            <div class="u-center-block__content topright">
              <a class="u-medium" onClick={props.hideDrawer}>
                <FontAwesomeIcon icon={faTimes} />
              </a>
            </div>
          </header>

          <div class="c-card__body no-padding-top-bottom">
            <ul class="c-card c-card--menu u-high c-card--grouped">
              <li class={this.isActive("/")}>
                <a onClick={() => props.goTo("/")}>Home</a>
              </li>
              <li class={this.isActive("/profile")}>
                <a onClick={() => props.goTo("/profile")}>Profile</a>
              </li>
              <li class={this.isActive("/other")}>
                <a onClick={() => props.goTo("/other")}>URL Not Found</a>
              </li>
              <li class="c-card__divider" />
              <li class="c-card__item c-card__item--disabled">Menu item disabled</li>
              <li class="c-card__divider" />
              <li class="c-card__item">Menu 7</li>
              <li class="c-card__divider" />
              <li class="c-card__divider" />
              <li class="c-card__item">Menu 10</li>
            </ul>
          </div>
          <footer class="c-card__footer">
            <div class="c-input-group">
              <button class="c-button c-button--ghost">
                Sign Out <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
