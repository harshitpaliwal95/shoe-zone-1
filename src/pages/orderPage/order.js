import React from "react";
import { Navbar } from "../../components";
import "./order.css";

export const Order = () => {
  return (
    <>
      <Navbar />
      {/* <div className="empty-box wishlist-box-placeholder">
        <p className="heading-lg emptybox-text">No Orders</p>
        <i className="bi bi-emoji-neutral"></i>
      </div> */}
      <main>
        <section className="main-box wishlist-box order-Box">
          <div className="order-item">
            <div class="notification-list">
              <div class="notify-img">
                <img src="url.jpg" alt="demo img" />
              </div>
              <div class="notify-contant">
                <p class="heading-lg">Air Jorden 4M MAX</p>
                <p class="gray-text">Price - 9,999</p>
                <p class="notify-time">2 minute ago</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
