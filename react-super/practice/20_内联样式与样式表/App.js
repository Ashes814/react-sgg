import "./App.css";
import React, { useState } from "react";

function App() {
  const [redBorder, setRedBorder] = useState(true);

  const changeColor = () => {
    setRedBorder(!redBorder);
  };
  return (
    <div className="App">
      <p className={`p1 ${redBorder ? "" : "blue-border"}`}>我是一个段落</p>
      <button onClick={changeColor}>点我一下</button>
    </div>
  );
}

export default App;
