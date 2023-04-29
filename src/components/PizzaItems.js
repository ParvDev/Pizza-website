import React, { useState } from "react";
import "./Pizzaitems.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";

export default function PizzaItems({ pizza }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const [selectedSize, setSelectedSize] = useState(pizza.size[0].items[0].size);

  return (
    <div className="pizzaItem">
      <div className="pizzaItemOuterContainer">
        <img
          style={{ width: 210, height: 210 }}
          src={pizza.img}
          alt=""
        ></img>
        <div className="pizzaItemContainer">
          <h4 className="pizzaItemText">{pizza.name}</h4>
          <h4 className="pizzaItemDescription">{pizza.description}</h4>
          <div className="pizzaItemSizeContainer">
            <h5 className="pizzaItemLength">Choose Size:</h5>
            {pizza.size[0].items.map((item, index) => (
              <button
                key={index}
                className="pizzaItemSizeButton"
                onClick={() => setSelectedSize(item.size)}
              >
                {item.size}
              </button>
            ))}
          </div>
          {cart.some((c) => c.id === pizza.id) ? (
            <button
              onClick={() => removeItemFromCart(pizza)}
              className="pizzaitembutton"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => addItemToCart({ ...pizza, size: selectedSize })}
              className="pizzaitembutton"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
