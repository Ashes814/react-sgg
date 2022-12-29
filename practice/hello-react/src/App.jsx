import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";

export default class App extends Component {
  getStudentData = () => {
    axios.get().then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.warn(error);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    );
  }
}
