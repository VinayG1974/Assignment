import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { useNavigate } from "react-router-dom";
import { strings } from "../../constants/fileWithConstants";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, wishlistItems, addToWishlist } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const cartItemCount = cartItems[id];
  const wishListItemCount = wishlistItems[id];
  return (
    <div className="product" key={"product"}>
      <img alt="product_img" src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ₹ {price}</p>
      </div>
      <div className="buttonRow">
        {cartItemCount === 1 ? (
          <button className="addToCartBttn" onClick={() => navigate("/cart")}>
            {strings.GO_TO_CART}
          </button>
        ) : (
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            {strings.ADD_TO_CART}
          </button>
        )}
        {wishListItemCount === 1 ? (
          <button
            className="addToWishlistBttn"
            onClick={() => navigate("/wishlist")}
          >
            {strings.GO_TO_WISH}
          </button>
        ) : (
          <button
            className="addToWishlistBttn"
            onClick={() => addToWishlist(id)}
          >
            {strings.ADD_TO_WISH}
          </button>
        )}
      </div>
    </div>
  );
};
