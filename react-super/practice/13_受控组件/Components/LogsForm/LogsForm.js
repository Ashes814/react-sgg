import React, { useState } from "react";
import Card from "../UI/Card/Card";

import "./LogsForm.css";

export default function LogsForm() {
  const [inputDate, setInputDate] = useState(" ");
  const [inputDesc, setInputDesc] = useState(" ");
  const [inputTime, setInputTime] = useState("");
  /*将表单中的数据存储到state中，将state设置为表单项的value值，
    当表单项发生变化，state会随之变化，state发生变化，表单项也会跟着改变
            - 双向绑定
            - 这样的表单就成为了受控组件

  */

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };
  const descChangeHandler = (event) => {
    setInputDesc(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setInputTime(event.target.value);
  };
  const formSubmitHandler = (event) => {
    // 在react中，表单需要通过react提交
    event.preventDefault();

    // 将数据拼装为一个对象
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime,
    };

    setInputDate("");
    setInputDesc("");
    setInputTime("");
    console.log(newLog);
  };

  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className="form-item">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>
        <div className="form-item">
          <label htmlFor="desc">Content</label>
          <input
            id="desc"
            type="text"
            onChange={descChangeHandler}
            value={inputDesc}
          />
        </div>
        <div className="form-item">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="number"
            onChange={timeChangeHandler}
            value={inputTime}
          />
        </div>
        <div className="form-btn">
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}
