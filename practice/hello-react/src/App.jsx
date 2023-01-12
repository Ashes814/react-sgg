import React, { Component } from "react";
import { Button, Space } from "antd";

import { GithubOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
// import { red } from "@ant-design/colors";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

// import Test from "./components/Test";

export default class App extends Component {
  render() {
    return (
      <div>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b96b",
            },
          }}
        >
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
        </ConfigProvider>
      </div>
    );
  }
}
