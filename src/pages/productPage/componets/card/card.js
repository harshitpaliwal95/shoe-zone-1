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
      {product.latest ? <div className="card-badge">new</div> : <></>}
      <div className="card-comp-contant">
        <h2 className="card-h2">{product.productName}</h2>
        <p>{product.categoryName}'s Shoes</p>
        <h3 className="card-h3">by Nike</h3>
        <p className="card-para"></p>
        <h4>RS {product.price}</h4>
        <p className="discount-tag">{product.discount}% off</p>
        <div className="rating-box rating-box-sm rating-comp">
          <div>
            {product.rating} <i className="bi bi-star-fill"></i>
          </div>
          <div>|</div>
          <div>5</div>
        </div>
      </div>
      <div className="card-btn_footer">
        <button className="btn btn-outline">Add to Cart</button>
        <button className="btn btn-outline">Add to wishlist</button>
      </div>
    </div>
  );
};
