import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const BasketCard = ({ el }) => {
  const dispatch = useDispatch();
  const {basket} = useSelector((s)=> s)


  return (
    <div className="basketCard">
      <div style={{ display: "flex" }} className="">
        <img src={el.image} alt="img" width={150} />
        <div className="basketCard--text">
          <h2>{el.title}</h2>
          <p>{el.description}</p>
          <div className="card--rating">
            <div
              className="card--rating__star"
              style={{ background: el.rating >= 1 ? "yellow" : "gray" }}
            ></div>
            <div
              className="card--rating__star"
              style={{ background: el.rating >= 2 ? "yellow" : "gray" }}
            ></div>
            <div
              className="card--rating__star"
              style={{ background: el.rating >= 3 ? "yellow" : "gray" }}
            ></div>
            <div
              className="card--rating__star"
              style={{ background: el.rating >= 4 ? "yellow" : "gray" }}
            ></div>
            <div
              className="card--rating__star"
              style={{ background: el.rating >= 5 ? "yellow" : "gray" }}
            ></div>
          </div>
          <div className="basketCard--text__quantity">
            <button
              onClick={() => dispatch({ type: "QUANTITY_MINUS", payload: el })}
            >
              -
            </button>
            <h4>{el.quantity}</h4>
            <button
              onClick={() => dispatch({ type: "QUANTITY_PLUS", payload: el })}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="basketCard--right">
        <div className="basketCard--right__price">
          <h1
            style={{
              color: el.price > 200 ? "#D75300" : "gray",
            }}
          >
            $
            {el.price > 200
              ? Math.trunc((el.price - (el.price * 30) / 100) * el.quantity)
              : el.price * el.quantity}
          </h1>
          {el.price > 200 ? (
            <h2
              style={{
                textDecoration: el.price > 200 ? "line-through" : "",
              }}
            >
              ${el.price * el.quantity}
            </h2>
          ) : null}
        </div>
        <div className="basketCard--right__delete">
          <a onClick={() => dispatch({type:"DELETE_BASKET" ,payload:el})}>
            < MdDeleteForever />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
