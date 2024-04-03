import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  let totalPrice = basket.reduce((acc, el) => {
    return el.price > 200
      ? acc + (el.price - (el.price * 30) / 100) * el.quantity
      : acc + el.price * el.quantity;
  }, 0);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--product">
            {basket.map((el) => (
              <BasketCard el={el} />
            ))}
          </div>
          <div className="basket--total">
            <h1>Total Price : ${Math.trunc(totalPrice)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
