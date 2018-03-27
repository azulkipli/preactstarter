import { Component } from "preact";
export default class Modal extends Component {
  constructor() {
    super();
  }
  render(props) {
    let clsModal = props.active ? "modal active" : "modal";
    return (
      <div class={clsModal} id="smodal">
        <a href="#close" class="modal-overlay" aria-label="Close" />
        <div class="modal-container">
          <div class="modal-header">
            <a href="#close" class="btn btn-clear float-right" aria-label="Close" onClick={props.toggleModal} />
            <div class="modal-title h5">{props.title}</div>
          </div>
          <div class="modal-body">
            <div class="content">{props.content}</div>
          </div>
        </div>
      </div>
    );
  }
}
