import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
// import Test from "./components/Test";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中， 靠a跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}
              {/* react中， 靠路由链接切换组件 */}

              <MyNavLink to="/test/about">About</MyNavLink>
              <MyNavLink to="/test/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由（编写路由链接） */}
                <Switch>
                  <Route path="/test/about" component={About}></Route>
                  <Route path="/test/home" component={Home}></Route>
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
