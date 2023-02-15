import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import "./App.css";

// 模拟一组事物数据
const MEALS_DATA = [
  {
    id: "1",
    title: "汉堡包1",
    desc: "100% lorem lorem lorem lorem",
    price: 12,
    img: "img/meals/1.jpg",
  },
  {
    id: "2",
    title: "汉堡包2",
    desc: "100% lorem lorem lorem lorem",
    price: 12,
    img: "img/meals/2.jpg",
  },
  {
    id: "3",
    title: "汉堡包3",
    desc: "100% lorem lorem lorem lorem",
    price: 12,
    img: "img/meals/3.jpg",
  },
  {
    id: "4",
    title: "汉堡包4",
    desc: "100% lorem lorem lorem lorem",
    price: 12,
    img: "img/meals/4.jpg",
  },
  {
    id: "5",
    title: "汉堡包5",
    desc: "100% lorem lorem lorem lorem",
    price: 12,
    img: "img/meals/5.jpg",
  },
  {
    id: "6",
    title: "汉堡包6",
    desc: "100% lorem lorem lorem lorem",
    price: 12,
    img: "img/meals/6.jpg",
  },
];

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  /* 创建一个state存储购物车数据
    1.商品[];
    2.商品总数（totalAmount）
    3.商品总价（totalPrice）
  
  */

  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  // 向购物车中添加商品
  const addMealHandler = (meal) => {
    debugger;
    const newCart = { ...cartData };

    if (newCart.items.indexOf(meal) === -1) {
      newCart.items.push(meal);

      // change amount
      meal.amount = 1;
    } else {
      // increase the amount of meal
      meal.amount += 1;
    }

    // increase total
    newCart.totalAmount += 1;
    newCart.totalPrice += meal.price;

    setCartData(newCart);
  };

  const subMealHandler = (meal) => {
    const newCart = { ...cartData };

    // change amount
    meal.amount -= 1;

    if (meal.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(meal), 1);
    }

    // increase total
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;

    setCartData(newCart);
  };
  return (
    <div className="App">
      <Meals
        mealsData={mealsData}
        addMealHandler={addMealHandler}
        onSub={subMealHandler}
      />
    </div>
  );
}

export default App;
