import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          className="image"
          src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg"
          alt=""
        ></img>
      </div>

      <div className="headerMid">
        <h3 className="headerText">Select Location</h3>
        <h3 className="headerText">Select Location according to your place</h3>
      </div>

      <div onClick={() =>   navigate("/cart")} style ={{position: "relative", cursor:"pointer"}}>
        <ShoppingCartIcon style={{ color: "white" }} />
        <span
          style={{
            backgroundColor: "white",
            width: 14,
            height: 14,
            borderRadius: 7,
            textAlign: "center",
            position: "absolute",
            bottm: 14,
            left: 14,
            fontSize: 13,
            fontWeight: 400,
          }}
        >
          {cart.length}
        </span>
      </div>

      <div className="headerRight">
        <h4 className="headerText">John Doe</h4>
        <h4 className="headerText">+91 9329949028</h4>
      </div>
    </div>
  );
}
