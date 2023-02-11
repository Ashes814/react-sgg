import React from "react";
import "./MyDate.css";

export default function MyDate(props) {
  return (
    <div className="date">
      <div className="month">
        {props.date.toLocaleString("en-EN", { month: "long" })}
      </div>
      <div className="day">{props.date.getDate()}</div>
    </div>
  );
}
