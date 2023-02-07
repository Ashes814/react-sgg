import ReactDom from "react-dom/client";

const App = (
  <div>
    <h1>This is a React Project</h1>
    <p>Hello World! 11</p>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(App);
