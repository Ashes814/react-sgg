import React, { Component } from "react";
import store from "../../redux/store";
import {
  createDecrementAction,
  createIncrementAction,
} from "../../redux/count_action";

export default class Count extends Component {
  state = {
    c: 0,
  };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  increment = () => {
    const { value } = this.selectedNumber;
    // const { count } = this.state;
    // this.setState({ count: count + value * 1 });
    store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectedNumber;
    store.dispatch(createDecrementAction(value * 1));
  };
  oddIncrement = () => {
    const { value } = this.selectedNumber;
    // const { count } = this.state;
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  };
  asyncIncrement = () => {
    const { value } = this.selectedNumber;
    const { count } = store.getState();
    setTimeout(() => store.dispatch(createIncrementAction(value * 1)), 500);
  };

  render() {
    return (
      <div>
        <h1>Current Sum: {store.getState()}</h1>
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
