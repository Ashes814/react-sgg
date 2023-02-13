import React from "react";
import "./MyDate.css";

export default function MyDate(props) {
  const month = props.date.toLocaleString("en-EN", { month: "long" });
  const day = props.date.getDate();
  return (
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
    </div>
  );
}
