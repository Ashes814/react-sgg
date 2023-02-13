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
    setShowConfirm(false);
  };

  const cancelHandler = () => {
    setShowConfirm(false);
  };
  return (
    <Card className="item">
      {/* 
        portal
          - 组件默认会作为父组件的后代渲染到页面中
          - backdrop不适合使用这种方式 
          - 通过portal可以将组件渲染到页面中指定位置
          - 使用方法
            1. 在index.html中添加新的元素
            2. 修改组件的渲染方式
              - 通过ReactDOM.createPortal()作为返回值创建元素
              - 参数
                1. jsx（修改前return后的代码）
                2. 目标位置
      
      */}
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
