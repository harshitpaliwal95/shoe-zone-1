import React from "react";

export const ProductCard = ({ product }) => {
  const { _id, image, productName, categoryName, price, discount, rating } =
    product;

  return (
    <>
      <div className="img-box">
        <img src={image} alt="productImg"></img>
      </div>
      <div className="product-content">
        <p className="main-heading">{productName}</p>
        <p className="text-lg">{categoryName}'s shoes</p>
        <p className="gray-text text-medium">by Nike</p>
        <p className="text-medium">
          Familiar but always fresh, the iconic Air Jordan 1 is remastered for
          today's sneakerhead culture. This Retro High OG version goes all in
          with premium leather, comfortable cushioning and classic design
          details.
        </p>
        <h3>RS {price}</h3>
        <p className="discount-tag">{discount}% off</p>
        <div className="rating-box rating-box-sm rating-comp">
          <div>
            {rating} <i className="bi bi-star-fill"></i>
          </div>
          <div>|</div>
          <div>5</div>
        </div>
        <div className="action-btn-box">
          <button className="btn btn-outline">Add To Cart</button>
          <button className="btn btn-outline">Add To Wishist</button>
        </div>
      </div>
    </>
  );
};
