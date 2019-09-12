import React, { Component } from "react";
import Timer from "../Timer/Timer";
import "./Chrono.css";

class Chrono extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    if (this.state.interval) {
      return;
    }
    const interval = setInterval(() => {
      this.setState({
        time: this.state.time + 1000
      });
    }, 1000);
    this.setState({
      interval: interval
    });
  }

  pause() {
    if (!this.state.interval) {
      return;
    }
    clearInterval(this.state.interval);
    this.setState({
      interval: undefined
    });
  }

  reset() {
    this.setState({
      interval: undefined,
      time: 0
    });
  }

  render() {
    return (
      <div>
        <Timer time={this.state.time} />
        <input type="button" value="Start" onClick={this.start} />
        <input type="button" value="Pause" onClick={this.pause} />
        <input type="button" value="Reset" onClick={this.reset} />
      </div>
    );
  }
}

export default Chrono;
