import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.clockTick = this.clockTick.bind(this);
  }

  clockTick() {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  }

  // ✅ Start ticking every second after mounting
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  // ✅ Clean up before unmounting
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Timer">
        <h2>Time: {this.state.time}</h2>
        <button onClick={() => this.props.onRemove(this.props.id)}>
          Remove Timer
        </button>
      </div>
    );
  }
}

export default Timer;
