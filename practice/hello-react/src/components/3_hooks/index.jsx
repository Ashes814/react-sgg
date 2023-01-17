import React from "react";

function Demo() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("@@~~~!!");
  }, [count]);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <button onClick={add}>+1</button>
    </div>
  );
}

export default Demo;
