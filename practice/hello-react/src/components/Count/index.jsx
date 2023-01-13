import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    const { value } = this.selectedNumber;
    const { count } = this.state;
    this.setState({ count: count + value * 1 });
  };
  decrement = () => {
    const { value } = this.selectedNumber;
    const { count } = this.state;
    this.setState({ count: count - value * 1 });
  };
  oddIncrement = () => {
    const { value } = this.selectedNumber;
    const { count } = this.state;
    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 });
    }
  };
  asyncIncrement = () => {
    const { value } = this.selectedNumber;
    const { count } = this.state;
    setTimeout(() => this.setState({ count: count + value * 1 }), 500);
  };

  render() {
    return (
      <div>
        <h1>Current Sum: {this.state.count}</h1>
        <select
          ref={(c) => {
            this.selectedNumber = c;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.oddIncrement}>odd +</button>
        <button onClick={this.asyncIncrement}>async +</button>
      </div>
    );
  }
}
