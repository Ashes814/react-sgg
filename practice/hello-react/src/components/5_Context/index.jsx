import React, { Component } from "react";
import "./index.css";

export default class A extends Component {
  state = { username: "tom" };
  render() {
    return (
      <div className="parent">
        <h3>I am A</h3>
        <h4>My username is {this.state.username}</h4>
        <B username={this.state.username} />
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>I am B</h3>
        <h4>My Father A is {this.props.username}</h4>
        <C />
      </div>
    );
  }
}

class C extends Component {
  render() {
    return (
      <div className="grand">
        <h3>I am C</h3>
        <h4>My GrandFather A is {"?"}</h4>
      </div>
    );
  }
}
