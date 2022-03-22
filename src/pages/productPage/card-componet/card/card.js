import "./card.css";
export const ProductCard = ({ product }) => {
  return (
    <div className="card-component">
      <div className="card-comp-img img-height">
        <img
          className="card-top-img img-height"
          src={product.image}
          alt="product img"
        />
      </div>
      <div className="card-badge">new</div>
      <div className="card-comp-contant">
        <h2 className="card-h2">{product.productName}</h2>
        <h3 className="card-h3">by Nike</h3>
        <p className="card-para"></p>
        <h5>RS {product.price}</h5>
        <p className="discount-tag">30%</p>
        <p></p>
      </div>
      <div className="card-btn_footer">
        <button className="btn btn-outline">Add to Cart</button>
        <button className="btn btn-outline">Add to wishlist</button>
      </div>
    </div>
  );
};
