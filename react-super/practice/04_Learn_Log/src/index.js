import ReactDom from "react-dom/client";
import "./index.css";

const App = (
  <div className="logs">
    <div className="item">
      <div className="date">
        <div className="month">April</div>
        <div className="day">19</div>
      </div>

      <div className="content">
        <h2 className="desc">Learn React</h2>
        <div className="time">40 minutes</div>
      </div>
    </div>
    <div className="item">
      <div className="date">
        <div className="month">April</div>
        <div className="day">19</div>
      </div>

      <div className="content">
        <h2 className="desc">Learn React</h2>
        <div className="time">40 minutes</div>
      </div>
    </div>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(App);
