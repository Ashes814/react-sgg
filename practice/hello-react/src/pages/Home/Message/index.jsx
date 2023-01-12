import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };
  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`);
  };
  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };
  render() {
    const { messageArr } = this.state;
    console.log(this.props.history);
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递param参数 */}
                <Link
                  //   replace={true}
                  to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}
                >
                  {msgObj.title}
                </Link>

                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>
                  push to show
                </button>
                <button
                  onClick={() => this.replaceShow(msgObj.id, msgObj.title)}
                >
                  replace to show
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}
