import React from "react";
import classes from "./Meal.module.css";

export default function Meal() {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src="/img/meals/1.jpg" alt="汉堡图片"></img>
      </div>

      <div className={classes.TextContainer}>
        <h2 className={classes.Title}>汉堡包</h2>
        <p className={classes.Desc}>
          百分百纯牛肉百分百纯牛肉百分百纯牛肉百分百纯牛肉
        </p>
        <div className={classes.PriceWrapper}>
          <span className={classes.Price}>12</span>
          <div>数量+</div>
        </div>
      </div>
    </div>
  );
}
