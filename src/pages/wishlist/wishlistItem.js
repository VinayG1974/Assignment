import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { useNavigate } from "react-router-dom";
import { strings } from "../../constants/fileWithConstants";

export const WishlistItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromWishlist } = useContext(ShopContext);
  const navigate = useNavigate();
  const cartItemCount = cartItems[id];
  const handleAddToCart = () => {
    addToCart(id);
    removeFromWishlist(id);
  };
  return (
    <div className="cartItem">
      <img alt="product_img" src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          {strings.PRICE} {price}
        </p>
        {cartItemCount === 1 ? (
          <button className="addToCartBttn" onClick={() => navigate("/cart")}>
            {strings.GO_TO_CART}
          </button>
        ) : (
          <button className="addToCartBttn" onClick={handleAddToCart}>
            {strings.GO_TO_CART}
          </button>
        )}
      </div>
    </div>
  );
};
