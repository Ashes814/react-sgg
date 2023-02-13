import React from "react";
import Logs from "../Logs";

export default function LogFilter(props) {
  // create onChange
  const changeFilterYearHandler = (event) => {
    props.changeYearHandler(+event.target.value);
  };
  return (
    <div>
      Year:
      <select value={props.year} onChange={changeFilterYearHandler}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
  );
}
