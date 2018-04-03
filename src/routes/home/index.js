import { h, Component } from "preact";
// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
// Unistore
class Home extends Component {
  render(props, {}) {
    // console.log("Home props", props);
    return (
      <div id="home" class="column col-12 p-2">
        <h1 class="h1">Home</h1>
        <p>This is the Home component.</p>

        <p>
          <button class="btn" onClick={() => props.incrementAndLog({}, "args")}>
            Click {props.count}
          </button>
        </p>
        <p>
          <button class="btn" onClick={props.toggleModal}>
            Open Modal
          </button>
        </p>
      </div>
    );
  }
}

export default connect("count", actions)(Home);
