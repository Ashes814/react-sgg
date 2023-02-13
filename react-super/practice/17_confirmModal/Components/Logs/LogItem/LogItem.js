import React, { useState } from "react";

import MyDate from "./MyDate/MyDate";
import Card from "../../UI/Card/Card";
import ConfirmModal from "../../UI/ConfirmModal/confirmModal";
import "./LogItem.css";

export default function LogItem(props) {
  const date = props.date;

  // 添加一个state记录是否显示confirmModal
  const [showConfirm, setShowConfirm] = useState(false);

  const deleteItemHandler = () => {
    setShowConfirm(true);
    // if (showConfirm) {
    //   //删除当前item，从数据的state中移除指定的数据
    //   props.deleteLogByIndex();
    // }
  };

  const confirmHandler = () => {
    props.deleteLogByIndex();
  };

  const cancelHandler = () => {
    setShowConfirm(false);
  };
  return (
    <Card className="item">
      {showConfirm && (
        <ConfirmModal
          confirmText={"Are you Sure to Delete This LOg?"}
          onCancel={cancelHandler}
          onConfirm={confirmHandler}
        />
      )}
      <MyDate date={date} />
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}</div>
      </div>
      <div>
        <div className="delete" onClick={deleteItemHandler}>
          ✖️
        </div>
      </div>
    </Card>
  );
}
