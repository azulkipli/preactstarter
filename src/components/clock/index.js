import { Component } from "preact";
class Clock extends Component {
  constructor() {
    super();
    // set initial time:
    this.state.time = Date.now();
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString();
    return <div class="text-center">Made by Azul | {time}</div>;
  }
}
