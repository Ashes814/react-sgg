import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  handleAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;

    // const doneCount = todos.filter((todo) => todo.done === true).length;
    const doneCount = todos.reduce((pre, todo) => {
      return todo.done ? pre + 1 : pre;
    }, 0);

    const totalCount = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={
              doneCount === totalCount && totalCount !== 0 ? true : false
            }
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button onClick={this.handleAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
