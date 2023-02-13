import React from "react";
import "./Card.css";
export default function Card(props) {
  // props.children
  //   props.children = "8848";
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
