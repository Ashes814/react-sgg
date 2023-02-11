import React from "react";
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

const Logs = () => {
  return (
    <div className="logs">
      <LogItem test="123" />
      <LogItem />
      <LogItem />
      <LogItem />
      <LogItem />
      <LogItem />
    </div>
  );
};

export default Logs;
