import React, { useContext } from "react";
import BackDrop from "../../UI/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";

const CartDetails = () => {
  const ctx = useContext(CartContext);
  return (
    <BackDrop>
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span onClick={}>清空购物车</span>
          </div>
        </header>

        <div className={classes.MealList}>
          {ctx.items.map((item) => {
            return <Meal key={item.id} meal={item} noDesc={true}></Meal>;
          })}
        </div>
      </div>
    </BackDrop>
  );
};

export default CartDetails;
