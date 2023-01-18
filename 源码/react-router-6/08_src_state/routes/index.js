import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "message",
        element: <Message />,
        children: [{ path: "detail", element: <Detail /> }],
      },
      { path: "news", element: <News /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about" />,
  },
];
