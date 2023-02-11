import React from "react";
import MyDate from "./MyDate";
import "./LogItem.css";

export default function LogItem() {
  return (
    <div className="item">
      <MyDate />
      <div className="content">
        <h2 className="desc">Learn React</h2>
        <div className="time">40 minutes</div>
      </div>
    </div>
  );
}
