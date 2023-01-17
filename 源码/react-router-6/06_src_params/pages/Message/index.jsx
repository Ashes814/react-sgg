import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    { id: "001", title: "消息1", content: "super idol1" },
    { id: "002", title: "消息2", content: "super idol2" },
    { id: "003", title: "消息3", content: "super idol3" },
    { id: "004", title: "消息4", content: "super idol4" },
  ]);
  return (
    <div>
      <ul>
        {messages.map((message) => {
          return (
            <li key={message.id}>
              {/* 路由链接 */}
              <Link
                to={`detail/${message.id}/${message.title}/${message.content}`}
              >
                Message:{message.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <hr />
      {/* 指定路由组件呈现的位置 */}
      <Outlet />
    </div>
  );
}
