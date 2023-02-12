// import Logs from "./Components/Logs/Logs";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState({ name: "swk", age: 19 });

  console.log("render");

  const updateUser = () => {
    // 如果直接修改旧的state对象，不会生效
    setUser({ ...user, name: "zbj", age: 2 });
  };

  const addHandler = () => {
    // setTimeout(
    //   // 回调函数执行时，react会将最新的state值作为参数传递
    //   () => {
    //     setValue((prevValue) => prevValue + 1);
    //   },
    //   1000
    // );
    setValue((prevValue) => prevValue + 1);
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

      当state值是一个对象时，修改时是使用新的对象替换已有对象

        - 函数组件-useState()
        - setState()会触发重新渲染，需要用旧的state的值，异步的
        - 为了避免这种情况，我们可以通过为setState传递回调函数的形式来修改state
          
      
      */}
      <h1>
        {value} + {user.name} + {user.age}
      </h1>
      <button onClick={updateUser}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  );
};

export default App;
