import React from "react";
import "./BackDrop.css";
import ReactDom from "react-dom";

const backdropRoot = document.getElementById("backdrop-root");

export default function BackDrop(props) {
  return ReactDom.createPortal(
    <div className="backdrop">{props.children}</div>,
    backdropRoot
  );
}
