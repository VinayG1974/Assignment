import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";
import { WishlistItem } from "./wishlistItem";
import { strings } from "../../constants/fileWithConstants";

export const Wishlist = () => {
  const { wishlistItems, getTotalWishlistAmount } = useContext(ShopContext);
  const totalAmount = getTotalWishlistAmount();

  const navigate = useNavigate();

  return (
    <div className="cart" key={"wishlist"}>
      <div>
        <h1>{strings.YOUR_WISH_ITEMS}</h1>
      </div>
      <div className="cart">
        {PRODUCTS?.map((product) =>
          wishlistItems[product?.id] !== 0 ? (
            <WishlistItem data={product} />
          ) : null
        )}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <button onClick={() => navigate("/")}>
            {strings.CONTINUE_SHOPPING}
          </button>
        </div>
      ) : (
        <h1>{strings.EMPTY_WISH}</h1>
      )}
    </div>
  );
};
