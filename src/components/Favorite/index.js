import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  const { favorite } = useSelector((s) => s);
  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          {favorite.map((el) => <FavoriteCard el={el}/>)}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
