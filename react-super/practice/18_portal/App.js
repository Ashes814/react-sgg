import Logs from "./Components/Logs/Logs";
import Card from "./Components/UI/Card/Card";
import ConfirmModal from "./Components/UI/ConfirmModal/confirmModal";
// import BackDrop from "./Components/UI/BackDrop/BackDrop";
import LogsForm from "./Components/LogsForm/LogsForm";
import { useState, useRef } from "react";
import "./App.css";
const App = () => {
  const initState = [
    { id: "001", date: new Date(), desc: "Learn 1", time: 40 },
    { id: "002", date: new Date(), desc: "Learn 2", time: 50 },
    { id: "003", date: new Date(), desc: "Learn 3", time: 60 },
    { id: "004", date: new Date(), desc: "Learn 4", time: 70 },
  ];

  const [logsData, setLogsData] = useState(initState);

  const saveLogHandler = (newData) => {
    // 向数据中添加一个id
    newData.id = Date.now() + "";

    setLogsData([...logsData, newData]);
  };

  // 定义一个函数，从数据中删除指定日志
  const deleteLogByIndex = (index) => {
    setLogsData((prevState) => {
      const newLogs = [...prevState];
      newLogs.splice(index, 1);
      return newLogs;
    });
  };

  /* 
    将LogsForm中的数据传递给App组件，让App.js向数组中添加数据
  */

  return (
    <div className="app">
      <LogsForm onSaveLog={saveLogHandler} />
      <Logs logsData={logsData} deleteLogByIndex={deleteLogByIndex} />
    </div>
  );
};

export default App;
