import { Navbar } from "../../components/navbar/navbar";
import mainImg from "../../assets/nike-air-force.jpg";
import giftImgOne from "../../assets/gift-img-one.jpg";
import giftImgTwo from "../../assets/gift-img-two.jpg";
import { ProductCard } from "../../components/card-componet/card";

import "./home.css";
const home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="head-offer">
          <span className="text-medium text-center">
            Free Shipping + Returns, Free Membership, Exclusive Products
          </span>
          <button className="user-ac-btn join-btn">
            <a href="pages/form-page/joinus.html">Join Us</a>
          </button>
        </div>
        <div className="home-img card-comp-img">
          <img
            src={mainImg}
            loading="lazy"
            className="responsive-img"
            alt="home page img"
          />
          <div className="card-comp-contant overlap-heading">
            <h2 className="home-img-item-name">NIKE FORCE 1</h2>
            <p className="text-medium">legendary style ready to make moves.</p>
          </div>
        </div>
        <div className="popular-section">
          <div>
            <span className="heading-lg">Popular Right Now</span>
          </div>
          {/* <!-- popular-card --> */}
          <div className="popular-card">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* <!-- popular-card --> */}
          {/* <!-- gift item --> */}

          <div className="gift-section">
            <span className="heading-lg">Gift Ideas</span>
          </div>
          <div className="grid-two">
            <div className="home-img card-comp-img">
              <img
                src={giftImgOne}
                loading="lazy"
                className="responsive-img"
                alt="home page img"
              />
              <div className="card-comp-contant overlap-heading">
                <h2 className="home-img-item-name">NIKE Running</h2>
                <p className="text-medium">
                  legendary style ready to make moves.
                </p>
              </div>
            </div>

            <div className="home-img card-comp-img">
              <img
                src={giftImgTwo}
                loading="lazy"
                className="responsive-img"
                alt="home page img"
              />
              <div className="card-comp-contant overlap-heading">
                <h2 className="home-img-item-name">NIKE Air Max</h2>
                <p className="text-medium">
                  legendary style ready to make moves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export { home };
