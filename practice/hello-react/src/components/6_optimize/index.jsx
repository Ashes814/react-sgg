import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  state = { carName: "c63 AMG" };

  changeCar = () => {
    this.setState({ carName: "Laferrari" });
  };

  render() {
    return (
      <div className="parent">
        <h3>I am Parent, I have a {this.state.carName}</h3>
        <button onClick={this.changeCar}>Change Car</button>
        <Child carName={this.state.carName} />
      </div>
    );
  }
}
class Child extends Component {
  render() {
    return (
      <div className="child">
        <h3>I am Child</h3>
        <h4>My Father has a {this.props.carName}</h4>
      </div>
    );
  }
}
