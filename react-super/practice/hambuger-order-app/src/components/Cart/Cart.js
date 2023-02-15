import React, { useContext } from "react";
import classes from "./Cart.module.css";
import IconImg from "../../asset/img/Bag.png";
import CartContext from "../../store/cart-context";

export default function Cart() {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.Cart}>
      <div className={classes.Icon}>
        <img src={IconImg} alt="bag pic" />
        {ctx.totalAmount === 0 ? null : (
          <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
        )}
      </div>

      {ctx.totalAmount === 0 ? (
        <p className={classes.NoMeal}>未选购商品</p>
      ) : (
        <p className={classes.Price}>{ctx.totalPrice}</p>
      )}

      <button
        className={`${classes.Button} ${
          ctx.totalAmount === 0 ? classes.Disable : null
        }`}
      >
        去结算
      </button>
    </div>
  );
}
