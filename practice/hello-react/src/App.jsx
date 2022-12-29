import React, { Component } from "react";
import Search from "./Components/Search";
import List from "./Components/List";

export default class App extends Component {
  state = { users: [] }; //初始化状态，users初始值为数组

  saveUsers = (users) => {
    this.setState({ users });
  };

  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={this.state.users} />
      </div>
    );
  }
}
