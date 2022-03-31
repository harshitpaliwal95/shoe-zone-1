import { useState } from "react";
import { useCart } from "../../../../context/cartContext";

export const PriceBox = () => {
  const { cartState } = useCart();

  const { cartItem } = cartState;

  const totalQuantityReducer = (pre, cur) => pre + cur.quantity;
  const totalQuantity = cartItem.reduce(totalQuantityReducer, 0);

  const ProductAmountReducer = (pre, cur) => pre + cur.quantity * cur.price;
  const ProductAmount = cartItem.reduce(ProductAmountReducer, 0);

  const AmountReducer = (pre, cur) => pre + cur.quantity * cur.price;
  const totalAmount = cartItem.reduce(AmountReducer, 1000);

  return (
    <div className="checkout-box">
      <div className="place-order-box">
        <h3>PRICE DETAILS</h3>
        <div className="charges-box">
          <div className="space-between">
            <span className="heading-sm">Price ({totalQuantity} items)</span>
            <span className="heading-sm">₹{ProductAmount}</span>
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
          <h3>₹{totalAmount - 1999}</h3>
        </div>
        <p className="gray-text save-lable">
          You will save ₹2000 on this order
        </p>
        <button className="btn btn-dark">PLACE ORDER</button>
      </div>
    </div>
  );
};
