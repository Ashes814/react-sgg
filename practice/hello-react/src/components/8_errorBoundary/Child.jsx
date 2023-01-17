import React, { Component } from "react";

export default class Child extends Component {
  state = {
    users: "abc",
    //[
    //   { id: "001", name: "tom", age: 18 },
    //   { id: "002", name: "jacl", age: 189 },
    //   { id: "003", name: "kkk", age: 1881 },
    // ],
  };
  render() {
    return (
      <div>
        <h2>Child</h2>
        {this.state.users.map((userObj) => {
          return (
            <h4 key={userObj.id}>
              {userObj.name} ---- {userObj.age}
            </h4>
          );
        })}
      </div>
    );
  }
}
