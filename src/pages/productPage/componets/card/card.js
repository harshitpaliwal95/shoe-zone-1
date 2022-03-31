import { useCart } from "../../../../context/cartContext";
import { useWishlist } from "../../../../context/wishlistContext";
import { Link } from "react-router-dom";
import "./card.css";
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
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
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
          onClick={() => {
            cartDispatch({
              type: "ADD_TO_CART",
              payload: product,
            });
          }}
        >
          Add To Cart
        </button>

        <button
          className="btn btn-outline"
          onClick={() =>
            wishlistDispatch({
              type: "ADD_TO_WISHLIST",
              payload: product,
            })
          }
        >
          Add to wishlist
        </button>
      </div>
    </div>
  );
};
