import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { incrementQuantity, decrementQuantity } from "../Redux/CartSlice";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };

  const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cartLeft">
          {cart.map((item, index) => (
            <div
              Key={index}
              style={{
                marginBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div classnmae="cartImage">
                <img
                  src={item.img}
                  alt=""
                  style={{ width: 60, height: 60, borderRadius: 5 }}
                />
              </div>

              <div classname="cartDescription" style={{ marginLeft: 10 }}>
                <h3 className="cartText">{item.name}</h3>
                <h4 className="cartTextDescription">
                  {item.description.length > 30
                    ? item.description.substr(0, 30) + "..."
                    : item.description}
                </h4>
                <h4 className="cartType">Regular | 100% Thin White Crust</h4>
              </div>

              <div style={{ marginLeft: "auto" }} classname="cartTotal">
                <h4>{item.price * item.quantity}</h4>
                <div className="cartButtons">
                  <div
                    onClick={() => decreaseQuantity(item)}
                    className="cartButton"
                  >
                    -
                  </div>
                  <div className="cartButton">{item.quantity}</div>
                  <div
                    onClick={() => increaseQuantity(item)}
                    className="cartButton"
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cartRight">
          <h3 className=" cartRightText">Choose your address</h3>
          <div className="cartTop">
            <AddLocationAltIcon style={{ color: "gray", fontSize: 17 }} />

            <div className="cartRightDescription">
              <h4>Select location</h4>
              <h4>
                Please select location, so that we can deliver your PizzaS!
              </h4>
              <button
                style={{
                  color: "green",
                  borderWidth: 0.7,
                  borderColor: "green",
                  cursor: "pointer",
                  margintop: 7,
                  borderRadius: 4,
                  Padding:4
                }}
              >
                Add Location
              </button>
            </div>
          </div>
          <div className="cartTop">
            <AddLocationAltIcon style={{ color: "gray", fontSize: 17 }} />

            <div className="cartRightDescription">
              <h4>Login to use your saved address</h4>
              <button
                style={{
                  color: "green",
                  borderWidth: 0.7,
                  borderColor: "green",
                  cursor: "pointer",
                  margintop: 7,
                  borderRadius: 4,
                  Padding:4
                }}
              >
                Add Location
              </button>
            </div>
          </div>
          <h3 className="cartRightText">Price Details</h3>

          <div>
            <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", marginTop:5}}>
                <h4 style={{fontSize: 15, fontWeight:"500"}}>SubTotal</h4>
                <h4 style={{fontSize: 15, fontWeight:"500"}}>{total}</h4>
            </div>
          </div>
          <div>
            <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", marginTop:5}}>
                <h4 style={{fontSize: 15, fontWeight:"500"}}>Discount</h4>
                <h4 style={{fontSize: 15, fontWeight:"500"}}>-</h4>
            </div>
          </div>
          <div>
            <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", marginTop:5}}>
                <h4 style={{fontSize: 15, fontWeight:"500"}}>Taxes and Charges</h4>
                <h4 style={{fontSize: 15, fontWeight:"500"}}>65</h4>
            </div>
          </div>
          <div>
            <div style={{display:"flex", alignItems: "center", justifyContent: "space-between", marginTop:5}}>
                <h4 style={{fontSize: 15, fontWeight:"bold"}}>Grand Total</h4>
                <h4 style={{fontSize: 15, fontWeight:"600"}}>{total + 65}</h4>
            </div>
          </div>
          <button className="cartButtonRight">Place order</button>

        </div>
      </div>
    </>
  );
}

export default Cart;
