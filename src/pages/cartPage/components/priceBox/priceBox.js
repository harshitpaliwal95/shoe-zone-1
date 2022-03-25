import React from "react";

export const PriceBox = () => {
  return (
    <div className="checkout-box">
      <div className="place-order-box">
        <h3>PRICE DETAILS</h3>
        <div className="charges-box">
          <div className="space-between">
            <span className="heading-sm">Price (4 items)</span>
            <span className="heading-sm">₹20000</span>
          </div>
          <div className="space-between">
            <span className="heading-sm">Discount</span>
            <span className="heading-sm">- ₹1999</span>
          </div>
          <div className="space-between">
            <span className="heading-sm">Delivery Charges</span>
            <span className="heading-sm">₹1000</span>
          </div>
        </div>
        <div className="space-between">
          <h3>Total Amount</h3>
          <h3>₹19000</h3>
        </div>
        <p className="gray-text save-lable">
          You will save ₹2000 on this order
        </p>
        <button className="btn btn-dark">PLACE ORDER</button>
      </div>
    </div>
  );
};
