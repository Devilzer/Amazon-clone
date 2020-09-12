import React from "react";
import Subtotal from "./Subtotal";
import CartItem from "./CartItem";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Shopping Cart</h2>
        </div>
        {cart.map((item) => (
          <CartItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt=""
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
