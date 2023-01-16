import React, { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    const { count } = this.state;

    this.setState({ count: count + 1 }, () => {
      alert("state 8848");
    });
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}
