import demo from "../../../assets/nike-air-zoom.webp";
import "./wishcard.css";
export const WishCard = () => {
  return (
    <div className="card-component">
      <div className="card-comp-img img-height">
        <img className="card-top-img img-height" src={demo} alt="product img" />
      </div>
      {true ? <div className="card-badge">new</div> : <></>}
      <div class="card-badge right-badge">
        <i class="bi bi-x-lg"></i>
      </div>
      <div className="card-comp-contant">
        <h2 className="card-h2">Nike air max</h2>
        <p>Men's Shoes</p>
        <h3 className="card-h3">by Nike</h3>
        <p className="card-para"></p>
        <h4>RS 9999</h4>
        <p className="discount-tag">22% off</p>
        <div className="rating-box rating-box-sm rating-comp">
          <div>
            4 <i className="bi bi-star-fill"></i>
          </div>
          <div>|</div>
          <div>5</div>
        </div>
      </div>
      <div className="card-btn_footer">
        <button className="btn btn-outline">Add to Cart</button>
        <button className="btn btn-outline">Remove</button>
      </div>
    </div>
  );
};
