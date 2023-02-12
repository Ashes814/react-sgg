import React from "react";
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

const Logs = () => {
  const logsData = [
    { id: "001", date: new Date(), desc: "Learn 1", time: 40 },
    { id: "002", date: new Date(), desc: "Learn 2", time: 50 },
    { id: "003", date: new Date(), desc: "Learn 3", time: 60 },
    { id: "004", date: new Date(), desc: "Learn 4", time: 70 },
  ];
  return (
    <div className="logs">
      {logsData.map((item, index) => (
        <LogItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Logs;
