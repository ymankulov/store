import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const FavoriteCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="card favorite--fav">
        <img src={el.image} alt="img" width={200} />
        <h3>{el.title}</h3>
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
        <div className="card--price">
          <h1
            style={{
              color: el.price > 200 ? "#D75300" : "black",
            }}
          >
            ${el.price > 200 ? el.price - (el.price * 30) / 100 : el.price}
          </h1>
          {el.price > 200 ? (
            <h2
              style={{
                textDecoration: el.price > 200 ? "line-through" : "",
              }}
            >
              ${el.price}
            </h2>
          ) : null}
        </div>
        <a
          className="close"
          onClick={() => dispatch({ type: "ADD_TO_FAVORITE", payload: el })}
        >
          <IoMdCloseCircleOutline />
        </a>
      </div>
    </div>
  );
};

export default FavoriteCard;
