import demo from "../../../../assets/nike-air-zoom.webp";
import "./card.css";
export const CartCard = () => {
  return (
    <div className="card-component">
      <div className="horizontal-card">
        <div className="card-side-img">
          <img className="card-side-img" src={demo} alt="demo img" />
        </div>
        <div className="card-comp-contant">
          <h4 className="card-h2 heading-sm">Nike Air Zoom</h4>
          <h3 className="card-h3">Size: 43</h3>
          <div className="item-quantity">
            <button className="btn-icon">
              <i className="bi bi-dash"></i>
            </button>
            <div className="quantity-number">1</div>
            <button className="btn-icon">
              <i className="bi bi-plus"></i>
            </button>
          </div>
          <h5 className="price-tag">RS: 5000</h5>
          <button className="btn btn-small btn-dark">Move To Wishlist</button>
          <button className="btn btn-small btn-dark">Remove</button>
        </div>
      </div>
    </div>
  );
};
