import React, { Fragment } from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
/*
    引入fontAwesome
        npm i --save @fortawesome/fontawesome-svg-core
# Free icons styles
        npm i --save @fortawesome/free-solid-svg-icons
        npm i --save @fortawesome/free-regular-svg-icons
        npm i --save @fortawesome/react-fontawesome@latest

*/

export default function Counter(props) {
  const addButtonHandler = () => {
    console.log(props.meal);
    console.log(props.meal.id);
    console.log(props.meal.amount);
    props.addMealHandler(props.meal);
  };

  const subButtonHandler = () => {
    props.onSub(props.meal);
  };
  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <Fragment>
          <button className={classes.Sub} onClick={subButtonHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Count}>{props.meal.amount}</span>
        </Fragment>
      ) : null}

      <button className={classes.Add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
