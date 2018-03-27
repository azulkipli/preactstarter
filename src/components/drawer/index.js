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
    return (
      <div id="sidebar-id" class="off-canvas-sidebar">
        <ul className="menu">
          <figure class="avatar" data-initial="Az" style="background-color: #5755d9;" />
          <b> Acep Zulkipli</b>
          <div class="float-right">
            <a class="btn btn-action" href="#close">
              <FontAwesomeIcon icon={faTimes} />
            </a>
          </div>

          <li class="divider" data-content="MENU" />
          <li class="menu-item">
            <a href="#">
              <i class="icon icon-people" /> My Profile
            </a>
          </li>
          <li class="menu-item">
            <a href="#">
              <i class="icon icon-bookmark" /> FAQs
            </a>
          </li>
          <li class="menu-item">
            <a href="#">
              <i class="icon icon-flag" /> Syarat & Ketentuan
            </a>
          </li>
          <li class="menu-item">
            <a href="#">
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
