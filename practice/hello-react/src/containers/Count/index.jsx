import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";
import React, { Component } from "react";

class Count extends Component {
  state = {
    c: 0,
  };

  increment = () => {
    const { value } = this.selectedNumber;
    this.props.jia(value * 1);
  };
  decrement = () => {
    const { value } = this.selectedNumber;
    this.props.jian(value * 1);
  };
  oddIncrement = () => {
    const { value } = this.selectedNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };
  asyncIncrement = () => {
    const { value } = this.selectedNumber;
    this.props.asyncJia(value * 1, 500);
  };

  render() {
    return (
      <div>
        <h2>I am Count</h2>
        <h4>
          Current Sum: {this.props.count} Number of Person is{" "}
          {this.props.renshu}
        </h4>

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

// export container

const mapStateToProps = (state) => {
  return { count: state.he, renshu: state.rens.length };
};
const mapDispatchToProps = {
  jia: createIncrementAction,
  jian: createDecrementAction,
  asyncJia: createIncrementAsyncAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
