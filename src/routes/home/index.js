import { h, Component } from "preact";
import { route } from "preact-router";

// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
// Fontawesome
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faAddressBook from "@fortawesome/fontawesome-free-solid/faAddressBook";
import faAmbulance from "@fortawesome/fontawesome-free-solid/faAmbulance";
import faAnchor from "@fortawesome/fontawesome-free-solid/faAnchor";
import faArchive from "@fortawesome/fontawesome-free-solid/faArchive";
import faAddressCard from "@fortawesome/fontawesome-free-solid/faAddressCard";
import faAlignCenter from "@fortawesome/fontawesome-free-solid/faAlignCenter";
import faAudioDescription from "@fortawesome/fontawesome-free-solid/faAudioDescription";
import faAdjust from "@fortawesome/fontawesome-free-solid/faAdjust";
import faAmericanSignLanguageInterpreting from "@fortawesome/fontawesome-free-solid/faAmericanSignLanguageInterpreting";

class Home extends Component {
  render(props, {}) {
    // console.log("Home props", props);
    return (
      <div id="home">
        <h1 class="h5 my-5 text-center">Home</h1>

        <div class="columns text-center my-6">
          <div class="column col-xs-4">
            <button class="btn btn-blockauto btn-noborder btn-transparent" onClick={() => route("/profile")}>
              <FontAwesomeIcon icon={faAddressBook} style={{ fontSize: "1.7em" }} /> <br /> Profile
            </button>
          </div>
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.showModal("Modal 1", "Ini isi modal box 1 dari home component")}
            >
              <FontAwesomeIcon icon={faAmbulance} style={{ fontSize: "1.7em" }} /> <br /> Open Modal 1
            </button>
          </div>
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.incrementAndLog("first argument here")}
            >
              <FontAwesomeIcon icon={faAnchor} style={{ fontSize: "1.7em" }} /> <br /> counter: {props.count}
            </button>
          </div>
        </div>
        <div class="columns text-center my-6">
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.incrementAndLog("first argument here")}
            >
              <FontAwesomeIcon icon={faArchive} style={{ fontSize: "1.7em" }} /> <br /> counter: {props.count}
            </button>
          </div>
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.showModal("Modal Home", "Ini isi modal box dari home component")}
            >
              <FontAwesomeIcon icon={faAlignCenter} style={{ fontSize: "1.7em" }} /> <br /> Open Modal
            </button>
          </div>
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.incrementAndLog("first argument here")}
            >
              <FontAwesomeIcon icon={faAddressCard} style={{ fontSize: "1.7em" }} /> <br /> counter: {props.count}
            </button>
          </div>
        </div>
        <div class="columns text-center my-6">
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.incrementAndLog("first argument here")}
            >
              <FontAwesomeIcon icon={faAudioDescription} style={{ fontSize: "1.7em" }} /> <br /> counter: {props.count}
            </button>
          </div>
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.showModal("Modal Home", "Ini isi modal box dari home component")}
            >
              <FontAwesomeIcon icon={faAdjust} style={{ fontSize: "1.7em" }} /> <br /> Open Modal
            </button>
          </div>
          <div class="column col-xs-4">
            <button
              class="btn btn-blockauto btn-noborder btn-transparent"
              onClick={() => props.incrementAndLog("first argument here")}
            >
              <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} style={{ fontSize: "1.7em" }} /> <br />{" "}
              counter: {props.count}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect("count", actions)(Home);
