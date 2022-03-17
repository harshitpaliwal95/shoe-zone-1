import demoImg from "../../assets/nike-air-zoom.webp";
const ProductCard = () => {
  return (
    <div className="card-component">
      <div className="card-comp-img">
        <img className="card-top-img" src={demoImg} alt="demo img" />
      </div>
      <div className="card-badge">new</div>
      <div className="card-comp-contant">
        <h2 className="card-h2">Nike Air Zoom</h2>
        <h3 className="card-h3">by Nike</h3>
        <p className="card-para"></p>
        <h5>RS 10,000</h5>
        <p className="discount-tag">30%</p>
        <p></p>
      </div>
      <div className="card-btn-footer">
        <button className="btn btn-outline">Add to Cart</button>
      </div>
    </div>
  );
};
export { ProductCard };
