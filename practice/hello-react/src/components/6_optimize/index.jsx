import React, { Component, PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
  state = { carName: "c63 AMG" };

  changeCar = () => {
    this.setState({ carName: "!!!" });
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return true;
  //   }

  render() {
    console.log("parent");
    return (
      <div className="parent">
        <h3>I am Parent, I have a {this.state.carName}</h3>
        <button onClick={this.changeCar}>Change Car</button>
        <Child carName={this.state.carName} />
      </div>
    );
  }
}
class Child extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props, this.state);
  //     console.log(nextProps, nextState);
  //     return this.props.carName !== nextProps.carName;
  //   }

  render() {
    console.log("child");
    return (
      <div className="child">
        <h3>I am Child</h3>
        <h4>My Father has a {"?"}</h4>
      </div>
    );
  }
}
