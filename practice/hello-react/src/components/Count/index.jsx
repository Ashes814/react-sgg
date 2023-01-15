import React, { Component } from "react";
// import store from "../../redux/store";
// import {
//   createDecrementAction,
//   createIncrementAction,
//   createIncrementAsyncAction,
// } from "../../redux/count_action";

export default class Count extends Component {
  state = {
    c: 0,
  };

  increment = () => {
    const { value } = this.selectedNumber;
    this.props.jia(value * 1);
    // const { count } = this.state;
    // this.setState({ count: count + value * 1 });
    // store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectedNumber;
    this.props.jian(value * 1);
    // store.dispatch(createDecrementAction(value * 1));
  };
  oddIncrement = () => {
    const { value } = this.selectedNumber;
    // const { count } = this.state;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };
  asyncIncrement = () => {
    const { value } = this.selectedNumber;
    this.props.asyncJia(value * 1, 500);
    // const { count } = store.getState();
    // store.dispatch(createIncrementAsyncAction(value * 1, 500));
  };

  render() {
    return (
      <div>
        <h1>Current Sum: {this.props.count}</h1>
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
