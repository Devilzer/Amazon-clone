import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>the subtle art</p>
        <p className="product_price">
          <small>₹</small>
          <strong>500</strong>
        </p>
        <div className="product_rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
          alt=""
        />
        <div className="btn">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
