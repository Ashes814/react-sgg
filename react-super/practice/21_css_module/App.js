import React, { useState } from "react";
import classes from "./App.module.css";

/* 
  CSS模块
    使用步骤
      1.创建一个xxx.module.css
      2.在组件中引入css
      3.通过classes来设置类
        className={classes.p1}
    CSS模块可以动态地设置唯一的class

*/

function App() {
  return (
    <div className={classes.p1}>
      <p>我是一个段落</p>
      <button>点我一下</button>
    </div>
  );
}

export default App;
