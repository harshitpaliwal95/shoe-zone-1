import demo from "../../../../assets/nike-air-zoom.webp";
import { useCart } from "../../../../context/cartContext";
import { useWishlist } from "../../../../context/wishlistContext";
import "./card.css";
export const CartCard = ({ product }) => {
  const { _id, image, productName, price } = product;
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  return (
    <div className="card-component-cart">
      <div className="horizontal-card">
        <div className="card-side-img">
          <img className="card-side-img" src={image} alt="demo img" />
        </div>
        <div className="card-comp-contant">
          <h4 className="card-h2 heading-sm">{productName}</h4>
          <div className="item-quantity">
            <button className="btn-icon">
              <i className="bi bi-dash"></i>
            </button>
            <div className="quantity-number">1</div>
            <button className="btn-icon">
              <i className="bi bi-plus"></i>
            </button>
          </div>
          <h5 className="price-tag">RS: {price}</h5>
          <button
            className="btn btn-small btn-dark"
            onClick={() =>
              wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product })
            }
          >
            Move To Wishlist
          </button>
          <button
            className="btn btn-small btn-dark"
            onClick={() =>
              cartDispatch({ type: "REMOVE_FROM_CART", payload: _id })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
