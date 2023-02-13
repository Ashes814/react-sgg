import React, { useState } from "react";
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
import "./Logs.css";

const Logs = (props) => {
  // 过滤数据，只显示某一年的数据
  const [year, setYear] = useState(2023);

  // create a function to modify year
  const changeYearHandler = (year) => {
    setYear(year);
  };

  let filterData = props.logsData.filter((item) => {
    return item.date.getFullYear() === year;
  });
  let logData = filterData.map((item) => (
    <LogItem
      key={item.id}
      {...item}
      deleteLogByIndex={() => props.deleteLogById(item.id)}
      // logIndex={index}
    />
  ));

  return (
    <Card className="logs">
      <LogFilter year={year} changeYearHandler={changeYearHandler} />
      {logData.length !== 0 ? logData : <p className="no-logs">No Data</p>}
    </Card>
  );
};

export default Logs;
