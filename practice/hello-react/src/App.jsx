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

  updateTodos = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done };
      } else {
        return todoObj;
      }
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;

    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodos={this.updateTodos}
            deleteTodo={this.deleteTodo}
          />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} />
        </div>
      </div>
    );
  }
}
