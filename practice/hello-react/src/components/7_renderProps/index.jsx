import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <A render={(name) => <B name={name} />} />
      </div>
    );
  }
}

class A extends Component {
  state = { name: "tom" };
  render() {
    return <div className="a">I am A {this.props.render(this.state.name)}</div>;
  }
}

class B extends Component {
  render() {
    return <div className="b">I am B , {this.props.name}</div>;
  }
}
