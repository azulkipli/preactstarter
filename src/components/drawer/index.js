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
    const clsSidebar = props.active ? "off-canvas-sidebar active" : "off-canvas-sidebar";
    return (
      <div id="sidebar" class={clsSidebar}>
        <ul className="menu">
          <figure class="avatar" data-initial="Az" style="background-color: #5755d9;" />
          <b> Acep Zulkipli</b>
          <div class="float-right">
            <a class="btn btn-link-dark" onClick={props.hideDrawer} style={{ marginTop: "-0.5rem" }}>
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>

          <li class="divider" data-content="MENU" />
          <li class="menu-item">
            <a onClick={() => props.goTo("/profile/azul")}>
              <i class="icon icon-people" /> My Profile
            </a>
          </li>
          <li class="menu-item">
            <a onClick={() => props.goTo("/faqs")}>
              <i class="icon icon-bookmark" /> FAQs
            </a>
          </li>
          <li class="menu-item">
            <a onClick={() => props.goTo("/terms-conditions")}>
              <i class="icon icon-flag" /> Syarat & Ketentuan
            </a>
          </li>
          <li class="menu-item">
            <a onClick={() => props.goTo("/privacy")}>
              <i class="icon icon-check" /> Kebijakan Privasi
            </a>
          </li>
          <li class="divider" />
          <li class="menu-item">
            <div class="menu-badge">
              <label class="label label-primary">2</label>
            </div>
            <a href="#">
              <i class="icon icon-time" /> History Transaksi
            </a>
          </li>
          <li class="divider" />
          <li class="menu-item">
            <a href="#">
              <i class="icon icon-shutdown" /> Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
