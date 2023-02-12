// import Logs from "./Components/Logs/Logs";
import { useState, useRef } from "react";
import "./App.css";
let temp;
const App = () => {
  /*

    获取dom对象
      1.原生
      2.从react获取
        1.创建一个存储dom对象的容器-useRef
  
  */
  const [value, setValue] = useState(0);
  const h1Ref = useRef(); // 容器， dom在current属性中

  /* 钩子函数的注意事项 
    1.只能用于函数组件或自定义钩子
    2.钩子函数只能直接在函数组件中调用
    */
  console.log(temp === h1Ref);

  temp = h1Ref;
  const clickHandler = () => {
    h1Ref.current.innerHTML += 1;
  };

  const addHandler = () => {
    setValue((preValue) => preValue + 1);
  };

  return (
    <div className="app">
      <h1 id="header" ref={h1Ref}>
        {value}
      </h1>
      <button>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default App;
