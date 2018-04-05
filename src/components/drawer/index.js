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
          <li>
            <figure class="avatar" data-initial="Az" style="background-color: #767676;" />
            <b> Acep Zulkipli</b>
            <div class="float-right">
              <a class="btn btn-link-dark" onClick={props.hideDrawer} style={{ marginTop: "-0.5rem" }}>
                <FontAwesomeIcon icon={faTimes} />
              </a>
            </div>
          </li>

          <li class="divider" />
          <li class="menu-item">
            <a onClick={() => props.goTo("/")}>Home</a>
          </li>
          <li class="menu-item">
            <a onClick={() => props.goTo("/profile/azul")}>My Profile</a>
          </li>
          <li class="menu-item">
            <a onClick={() => props.goTo("/faqs")}>FAQs</a>
          </li>
          <li class="menu-item">
            <a onClick={() => props.goTo("/terms-conditions")}>Syarat & Ketentuan</a>
          </li>
          <li class="menu-item">
            <a onClick={() => props.goTo("/privacy")}>Kebijakan Privasi</a>
          </li>
          <li class="divider" />
          <li class="menu-item">
            <div class="menu-badge">
              <label class="label label-primary">2</label>
            </div>
            <a href="#">History Transaksi</a>
          </li>
          <li class="divider" />
          <li class="menu-item">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}
