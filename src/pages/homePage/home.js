import { Navbar } from "../../components/navbar/navbar";
import mainImg from "../../assets/nike-air-force.jpg";
import giftImgOne from "../../assets/gift-img-one.jpg";
import giftImgTwo from "../../assets/gift-img-two.jpg";
import "./home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Navbar />
      <main className="main-home">
        <div className="head-offer">
          <span className="text-medium text-center">
            Free Shipping + Returns, Free Membership, Exclusive Products
          </span>
          <button className="user-ac-btn join-btn">
            <Link to="/join">Join Us</Link>
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
            <Link to="/product">
              <button className="btn btn-outline">Shop Now</button>
            </Link>
          </div>
        </div>
        <div className="popular-section">
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
}
