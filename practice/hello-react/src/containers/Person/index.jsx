import React, { Component } from "react";

export default class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    console.log(name, age);
  };
  render() {
    return (
      <div>
        <h2>I am Person</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="your name"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="your age"
        />
        <button onClick={this.addPerson}>Add</button>
        <ul>
          <li>name1--age1</li>
          <li>name2--age2</li>
          <li>name2--age2</li>
        </ul>
      </div>
    );
  }
}
