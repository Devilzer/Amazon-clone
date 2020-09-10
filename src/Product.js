import React from "react";
import "./product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span class="fa fa-star checked"></span>
            ))}
          {/* <span class="fa fa-star"></span> */}
        </div>
        <img src={image} alt="" />
        <div className="btn">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
