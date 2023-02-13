import React from "react";
import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import "./LogItem.css";

export default function LogItem(props) {
  const date = props.date;
  // props is read only
  // props.desc = 8848;    Error

  return (
    <Card className="item">
      <MyDate date={date} />
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
    </Card>
  );
}
