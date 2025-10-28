import React from "react";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timerIDs: [],
    };
    this.handleAddTimer = this.handleAddTimer.bind(this);
    this.handleRemoveTimer = this.handleRemoveTimer.bind(this);
  }

  handleAddTimer() {
    const newTimer = Math.random();
    this.setState((prevState) => ({
      timerIDs: [...prevState.timerIDs, newTimer],
    }));
  }

  handleRemoveTimer(id) {
    this.setState((prevState) => ({
      timerIDs: prevState.timerIDs.filter((timerId) => timerId !== id),
    }));
  }

  // ✅ Lifecycle: add one timer automatically
  componentDidMount() {
    this.handleAddTimer();
  }

  render() {
    return (
      <div>
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">
          {this.state.timerIDs.map((id) => (
            <Timer key={id} id={id} onRemove={this.handleRemoveTimer} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
