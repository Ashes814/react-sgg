import React, { Component } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "eat", done: true },
      { id: "002", name: "sleep", done: true },
      { id: "003", name: "coding", done: false },
      { id: "004", name: "shopping", done: true },
    ],
  };

  // addTodo is for add a todo, which accept a todo object as parameter
  addTodo = (todoObj) => {
    const { todos } = this.state;

    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };

  itemtest = () => {
    console.log("itemtest", this);
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} itemtest={this.itemtest} />
          <Footer />
        </div>
      </div>
    );
  }
}
