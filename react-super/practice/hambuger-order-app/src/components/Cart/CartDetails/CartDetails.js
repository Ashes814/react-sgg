import React, { useContext, useState } from "react";
import BackDrop from "../../UI/BackDrop/BackDrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/cart-context";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {
  const ctx = useContext(CartContext);

  // 设置state控制确认框的显示
  const [showConfirm, setShowConfirm] = useState(false);

  const showConfirmHandler = (e) => {
    setShowConfirm(true);
  };

  const cancelHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };
  const okHandler = (e) => {
    // 清空购物车
    ctx.clearCart();
  };
  return (
    <BackDrop onClick={cancelHandler}>
      {showConfirm && (
        <Confirm
          confirmText="确认清空购物车吗？"
          onCancel={cancelHandler}
          onOk={okHandler}
        />
      )}
      <div className={classes.CartDetails} onClick={(e) => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div className={classes.Clear}>
            <FontAwesomeIcon icon={faTrash} />
            <span onClick={showConfirmHandler}>清空购物车</span>
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
