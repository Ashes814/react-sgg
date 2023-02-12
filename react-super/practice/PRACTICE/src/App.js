// import Logs from "./Components/Logs/Logs";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [value, setValue] = useState(0);

  console.log("render");

  const addHandler = () => {
    setValue(value + 1);
  };
  const minusHandler = () => {
    setValue(value - 1);
  };

  return (
    <div className="app">
      {/* 在react中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染，
      这里需要一个特殊的变量，当这个变量被修改时，组件会自动重新渲染

      state相当于一个变量，
        只是这个变量在react中进行了注册，
        react会监控这个变量，当state发生变化时，会自动触发组件的重新渲染

      在函数组件中，我们需要通过钩子函数获取state - useState(initState)
        return 【initState：初始值, f:函数】
        f函数可以修改state并自动render
      
      */}
      <h1>{value}</h1>
      <button onClick={minusHandler}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default App;
