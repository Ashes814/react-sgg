import React from "react";
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import "./Logs.css";

const Logs = (props) => {
  /* 
    state的提升
      - 把数据放在公共祖先组件中，使得兄弟组件能够互相访问
  */
  const logData = props.logsData.map((item, index) => (
    <LogItem
      key={item.id}
      {...item}
      deleteLogByIndex={() => props.deleteLogByIndex(index)}
      // logIndex={index}
    />
  ));
  return (
    <Card className="logs">
      {logData.length !== 0 ? logData : <p className="no-logs">No Data</p>}
    </Card>
  );
};

export default Logs;
