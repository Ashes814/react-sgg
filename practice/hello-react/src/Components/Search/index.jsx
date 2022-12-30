import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 获取用户输入
    const {
      keyWordElement: { value: keyword },
    } = this;

    //发送请求前通知List更新状态
    PubSub.publish("tieite", { isFirst: false, isLoading: true });
    // 发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      (response) => {
        //请求成功后通知List更新状态
        PubSub.publish("tieite", {
          err: "",
          isLoading: false,
          users: response.data.items,
        });
        //     this.props.updateAppState({
        //       err: "",
        //       isLoading: false,
        //       users: response.data.items,
      },
      (error) => {
        //请求失败后通知List更新状态
        PubSub.publish("tieite", {
          isLoading: false,
          err: error.message,
        });
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
