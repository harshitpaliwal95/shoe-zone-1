import { useCart } from "../../context/cartContext";
import { useWishlist } from "../../context/wishlistContext";
import { useNavigate } from "react-router-dom";
import { findItem } from "../../utils";
import "./card.css";
import { Alert } from "..";
import { useState, useEffect } from "react";
import { useAuth } from "../../context";

export const ProductCard = ({ product }) => {
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

  const [alert, setAlert] = useState({ alert: false, alertText: "" });
  const [cartBtnText, setCartBtnText] = useState("Add To Cart");
  const [wishlistBtnText, setWishlistBtnText] = useState("Add To Wishlist");

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cartItem },
    cartDispatch,
  } = useCart();
  const {
    auth: { isAuth },
  } = useAuth();

  const navigate = useNavigate();

  const isItemInCart = findItem(cartItem, _id);
  const isItemInWishlist = findItem(wishlist, _id);

  useEffect(() => {
    if (isAuth) {
      if (isItemInCart) {
        setCartBtnText("Go To Cart");
      }
      if (isItemInWishlist) {
        setWishlistBtnText("Go To Wishist");
      }
    } else {
      setCartBtnText("Add To Cart");
      setWishlistBtnText("Add To Wishist");
    }
  }, [isItemInCart, isAuth, isItemInWishlist]);
  const addToCartHandler = (product) => {
    if (isAuth) {
      if (isItemInCart) {
        navigate("/cart");
      } else {
        cartDispatch({
          type: "ADD_TO_CART",
          payload: product,
        });
        setAlert({ alert: true, alertText: "Product Added To Cart" });
      }
      setCartBtnText("Go To Cart");
    } else {
      navigate("/login");
    }
  };

  const addToWishlistHandler = (product) => {
    if (isAuth) {
      if (isItemInWishlist) {
        navigate("/wishlist");
      } else {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: product,
        });

        setAlert({ alert: true, alertText: "Product Added To Wishlist" });
      }
      setWishlistBtnText("Go To Wishist");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert({ alert: false });
    }, 1500);
  }, [alert.alert]);

  return (
    <div key={_id} className="card-component">
      {alert.alert && <Alert text={alert.alertText} />}
      <div className="card-comp-img img-height">
        <img
          className="card-top-img img-height"
          src={image}
          alt="product img"
        />
      </div>
      {latest ? <div className="card-badge">new</div> : <></>}
      <div
        className="card-comp-contant"
        onClick={() => navigate(`/product/${_id}`)}
      >
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
          {cartBtnText}
        </button>

        <button
          className="btn btn-outline"
          onClick={() => addToWishlistHandler(product)}
        >
          {wishlistBtnText}
        </button>
      </div>
    </div>
  );
};
