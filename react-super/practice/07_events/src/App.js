const App = () => {
  const clickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    alert("click");

    /* 
      在react中，无法使用return false取消默认行为 
      利用事件对象
        - react事件中同样会传递事件对象，可以在响应函数中定义参数来接收事件对象
        - react中的事件对象同样不是原生的事件对象，是经过react包装后新的事件对象
        - 由于对象经过包装，所以使用过程中我们无需再去考虑兼容性问题
    */
  };
  return (
    <div
      onClick={() => {
        alert("div");
      }}
      style={{
        width: 200,
        height: 200,
        margin: "100x auto",
        backgroundColor: "#bfa",
      }}
    >
      {/* 
      在react中，事件需要通过元素的属性来设置，
      和原生js 不同，react中的事件属性需要驼峰命名法：
        onClick
      
      属性值不能直接执行代码，而是需要一个回调函数：
        onclick=“alert（123）”
        onClick={() => {alert(123)}}
      */}
      <button
        onClick={() => {
          alert(8848);
        }}
      >
        push me
      </button>

      <a href="https://www.baidu.com" onClick={clickHandler}>
        link
      </a>
    </div>
  );
};

export default App;
