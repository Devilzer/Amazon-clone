import React from "react";
import One from "./ratings/One";
import Two from "./ratings/Two";
import Three from "./ratings/Three";
import Four from "./ratings/Four";
import Five from "./ratings/Five";
import "./CartItem.css";
import { useStateValue } from "./StateProvider";
function CartItem({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };
  return (
    <div className="cart_item">
      <img className="cart_item_img" src={image} alt="" />
      <div className="cart_item_info">
        <p className="cart_item_name">{title}</p>
        <p className="cart_item_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        {rating === 1 && <One />}
        {rating === 2 && <Two />}
        {rating === 3 && <Three />}
        {rating === 4 && <Four />}
        {rating === 5 && <Five />}
        <div className="btn">
          <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
