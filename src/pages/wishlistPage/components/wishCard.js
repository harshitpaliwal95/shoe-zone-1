import { useCart, useWishlist } from "../../../context";
import { findItem } from "../../../utils";

import { useState, useEffect } from "react";
import { Alert } from "../../../components";
import "./wishcard.css";
import { useNavigate } from "react-router-dom";
export const WishCard = ({ product }) => {
  const {
    _id,
    image,
    latest,
    productName,
    categoryName,
    price,
    discount,
    rating,
  } = product;
  const { wishlistDispatch } = useWishlist();
  const {
    cartState: { cartItem },
    cartDispatch,
  } = useCart();

  const [alert, setAlert] = useState({ alert: false, alertText: "" });
  const [btnText, setBtnText] = useState("Add To Cart");
  const navigate = useNavigate();

  const isItemInCart = findItem(cartItem, _id);
  useEffect(() => {
    if (isItemInCart) {
      setBtnText("Go To Cart");
    }
  }, [isItemInCart]);

  const addToCartHandler = (product) => {
    if (isItemInCart) {
      setAlert({ alert: true, alertText: "Product Already in your cart" });
      navigate("/cart");
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      setBtnText("Go To Cart");
      setAlert({ alert: true, alertText: "Product Added To Cart" });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert({ alert: false });
    }, 1500);
  }, [alert.alert]);
  return (
    <div className="card-component">
      {alert.alert && <Alert text={alert.alertText} />}
      <div className="card-comp-img img-height">
        <img
          className="card-top-img img-height"
          src={image}
          alt="product img"
        />
      </div>
      {latest ? <div className="card-badge">new</div> : <></>}
      <div className="card-comp-contant">
        <h2 className="card-h2">{productName}</h2>
        <p>{categoryName}'s Shoes</p>
        <h3 className="card-h3">by Nike</h3>
        <p className="card-para"></p>
        <h4>RS {price}</h4>
        <p className="discount-tag">{discount}% off</p>
        <div className="rating-box rating-box-sm rating-comp">
          <div>
            {rating} <i className="bi bi-star-fill"></i>
          </div>
          <div>|</div>
          <div>5</div>
        </div>
      </div>
      <div className="card-btn_footer">
        <button
          className="btn btn-outline"
          onClick={() => addToCartHandler(product)}
        >
          {btnText}
        </button>
        <button
          className="btn btn-outline"
          onClick={() =>
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};
