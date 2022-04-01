import { useCart } from "../../../../context/cartContext";
import { useWishlist } from "../../../../context/wishlistContext";
import { useNavigate } from "react-router-dom";
import { itemInCart, itemInWishList } from "../../../../utils/findItem";
import "./card.css";
import { useState } from "react";

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

  const navigate = useNavigate();

  const isItemInCart = itemInCart(cartItem, _id);
  const addToCartHandler = (product) => {
    isItemInCart
      ? navigate("/cart")
      : cartDispatch({
          type: "ADD_TO_CART",
          payload: product,
        });
    setCartBtnText("Go To Cart");
  };

  const isItemInWishlist = itemInWishList(wishlist, _id);
  const addToWishlistHandler = (product) => {
    isItemInWishlist
      ? navigate("/wishlist")
      : wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: product,
        });
    setWishlistBtnText("Go To Wishist");
  };
  return (
    <div key={_id} className="card-component">
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
