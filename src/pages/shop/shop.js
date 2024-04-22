import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { strings } from "../../constants/fileWithConstants";

export const Shop = () => {
  return (
    <div className="shop" key={"shop"}>
      <div className="shopTitle">
        <h1>{strings.E_COMMERCE}</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
