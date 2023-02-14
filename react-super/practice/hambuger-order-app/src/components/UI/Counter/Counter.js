import React, { Fragment } from "react";
import classes from "./Counter.module.css";

export default function Counter(props) {
  return (
    <div className={classes.Counter}>
      {props.amount && props.amount !== 0 ? (
        <Fragment>
          <button className={classes.Sub}>
            <span>-</span>
          </button>
          <span className={classes.Count}>{props.amount}</span>
        </Fragment>
      ) : null}

      <button className={classes.Add}>
        <span>+</span>
      </button>
    </div>
  );
}
