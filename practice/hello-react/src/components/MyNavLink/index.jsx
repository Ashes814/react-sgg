import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    // const { title } = this.props;
    return (
      <NavLink
        activeClassName="active"
        className="list-group-item"
        {...this.props}
      />
    );
  }
}
