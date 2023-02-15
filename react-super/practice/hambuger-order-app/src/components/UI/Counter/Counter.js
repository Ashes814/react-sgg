import React, { Fragment, useContext } from "react";
import CartContext from "../../../store/cart-context";
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
  // Obtain context
  const ctx = useContext(CartContext);

  const addButtonHandler = () => {
    ctx.addMealHandler(props.meal);
  };

  const subButtonHandler = () => {
    ctx.subMealHandler(props.meal);
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
