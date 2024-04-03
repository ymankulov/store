import React, { useEffect } from "react";
import { data } from "../../Data";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Product = () => {
  const { product } = useSelector((s) => s);
  const dispatch = useDispatch();

  const getPorduct = (main) => {
    dispatch({ type: "GET_PRODUCT", payload: main });
  };
  console.log(product);
  useEffect(() => {
    getPorduct(data);
  }, []);

  //   let saleProduct = product.map((el) => {
  //     return el.price > 200 ? {...el, price: el.price / 100 * 30} : el
  //   })
  return (
    <div id="product">
      <div className="container">
        <div className="product">
          {product
            .sort((a, b) => b.price - a.price)
            .map((el) => (
              <ProductCard el={el} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
