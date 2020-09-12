import React from "react";
import "./product.css";
import One from "./ratings/One";
import Two from "./ratings/Two";
import Three from "./ratings/Three";
import Four from "./ratings/Four";
import Five from "./ratings/Five";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //send item to the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {rating === 1 && <One />}
          {rating === 2 && <Two />}
          {rating === 3 && <Three />}
          {rating === 4 && <Four />}
          {rating === 5 && <Five />}
        </div>
        <img src={image} alt="" />
        <div className="btn">
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
