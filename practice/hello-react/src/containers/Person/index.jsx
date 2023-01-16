import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;

    const personObj = { id: nanoid(), name, age };
    this.props.jiaren(personObj);
    this.nameNode.value = this.ageNode.value = "";
  };
  render() {
    return (
      <div>
        <h2>I am Person Count is {this.props.count}</h2>
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
          {this.props.personArr.map((ren) => {
            return (
              <li key={ren.id}>
                name: {ren.name}--age:{ren.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ personArr: state.persons, count: state.count }),
  {
    jiaren: createAddPersonAction,
  }
)(Person);
