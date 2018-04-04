import { Component } from "preact";
import { connect } from "unistore/preact";
import actions from "../../store/actions";

class Modal extends Component {
  render(props, {}) {
    // console.log("Modal props", props);
    let clsModal = props.modalActive ? "modal active" : "modal";
    return (
      <div class={clsModal} id="smodal">
        <a class="modal-overlay" aria-label="Close" onClick={props.hideModal} />
        <div class="modal-container">
          <div class="modal-header">
            <a class="btn btn-clear float-right" aria-label="Close" onClick={props.hideModal} />
            <div class="modal-title h5">{props.modalTitle}</div>
          </div>
          <div class="modal-body">
            <div class="content">{props.modalContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("modalActive, modalTitle, modalContent", actions)(Modal);
