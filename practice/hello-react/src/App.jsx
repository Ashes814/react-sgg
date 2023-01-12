import React, { Component } from "react";
import { Button, Space } from "antd";

import { GithubOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
// import Test from "./components/Test";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">click me</Button>
        <Button type="link">click me2</Button>
        <Button>click me3</Button>
        <Space>
          <GithubOutlined />
        </Space>

        <Space direction="vertical">
          <DatePicker />
          <DatePicker picker="week" />
          <DatePicker picker="month" />
          <DatePicker picker="quarter" />
          <DatePicker picker="year" />
        </Space>
      </div>
    );
  }
}
