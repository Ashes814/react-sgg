import React from "react";
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

const Logs = () => {
  return (
    <div className="logs">
      <LogItem desc="Learn React" time="50 minutes" date={new Date()} />
      <LogItem desc="Learn React" time="50 minutes" date={new Date()} />
      <LogItem desc="Learn React" time="50 minutes" date={new Date()} />
    </div>
  );
};

export default Logs;
