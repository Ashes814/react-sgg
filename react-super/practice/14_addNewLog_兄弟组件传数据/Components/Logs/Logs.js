import React from "react";
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import "./Logs.css";

const Logs = (props) => {
  /* 
    state的提升
      - 把数据放在公共祖先组件中，使得兄弟组件能够互相访问
  */

  return (
    <Card className="logs">
      {props.logsData.map((item) => (
        <LogItem key={item.id} {...item} />
      ))}
    </Card>
  );
};

export default Logs;
