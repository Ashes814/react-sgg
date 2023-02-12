import React from "react";
import MyDate from "./MyDate/MyDate";
import "./LogItem.css";

export default function LogItem(props) {
  const date = props.date;

  return (
    <div className="item">
      <MyDate date={date} />
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
    </div>
  );
}
