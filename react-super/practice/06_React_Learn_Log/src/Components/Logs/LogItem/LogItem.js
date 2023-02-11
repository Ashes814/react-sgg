import React from "react";
import MyDate from "./MyDate/MyDate";
import "./LogItem.css";

const LogItem = (props) => {
  console.log(props);

  return (
    <div className="item">
      <MyDate />
      <div className="content">
        {/* if the data in the components are all static, it will be useless, We need set Data Dynamically 
        Father Components can transform data to the son. */}
        <h2 className="desc">Learn React</h2>
        <div className="time">40 minutes</div>
      </div>
    </div>
  );
};

export default LogItem;
