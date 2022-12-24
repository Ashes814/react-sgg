//import react core
import React, { Component } from "react";
import Hello from "./Components/Hello";
import Welcome from "./Components/Welcome";

// create skin component App and exposure
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
