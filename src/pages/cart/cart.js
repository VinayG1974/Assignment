import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { strings } from "../../constants/fileWithConstants";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart" key={"cart"}>
      <div>
        <h1>{strings.YOUR_ITEMS}</h1>
      </div>
      <div className="cart">
        {PRODUCTS?.map((product) => {
          if (cartItems[product?.id] !== 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p style={{ textAlign: "center" }}>
            {strings.TOTAL} {totalAmount}{" "}
          </p>
          <button onClick={() => navigate("/")}>
            {strings.CONTINUE_SHOPPING}
          </button>
          {localStorage.getItem("user") ? (
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {strings.CHECKOUT}
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              {strings.CHECKOUT}
            </button>
          )}
        </div>
      ) : (
        <h1>{strings.EMPTY_CART}</h1>
      )}
    </div>
  );
};
