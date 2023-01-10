import React, { Component } from "react";
import qs from "qs";

const Details = [
  { id: "01", content: "hello Phina" },
  { id: "02", content: "hello China" },
  { id: "03", content: "hello CCTV" },
];

export default class Detail extends Component {
  render() {
    // const { id, title } = this.props.match.params;
    // console.log(qs.parse(this.props.location.search.slice(1)));
    const { id, title } = qs.parse(this.props.location.search.slice(1));
    const findResult = Details.find((detailObj) => {
      return detailObj.id === id;
    });
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    );
  }
}
