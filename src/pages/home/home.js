import { Navbar } from "../../components/navbar/navbar";
import mainImg from "../../assets/nike-air-force.jpg";
import giftImgOne from "../../assets/gift-img-one.jpg";
import giftImgTwo from "../../assets/gift-img-two.jpg";

import "./home.css";
const home = () => {
  return (
    <>
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
            <div className="card-component">
              <div className="card-comp-img">
                <img
                  className="card-top-img"
                  src="assets/jorden-demo.jpeg"
                  alt="demo img"
                  srcset=""
                />
              </div>
              <div className="card-badge">new</div>
              <div className="card-comp-contant">
                <h2 className="card-h2">Air Jordan 4</h2>
                <h3 className="card-h3">by Nike</h3>
                <p className="card-para">
                  <h5>RS 10,000</h5>
                  <p className="discount-tag">30% off</p>
                </p>
              </div>
              <div className="card-btn-footer">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
            <div className="card-component">
              <div className="card-comp-img">
                <img
                  className="card-top-img"
                  src="assets/jorden-demo.jpeg"
                  alt="demo img"
                  srcset=""
                />
              </div>
              <div className="card-badge">new</div>
              <div className="card-comp-contant">
                <h2 className="card-h2">Air Jordan 4</h2>
                <h3 className="card-h3">by Nike</h3>
                <p className="card-para">
                  <h5>RS 10,000</h5>
                  <p className="discount-tag">30% off</p>
                </p>
              </div>
              <div className="card-btn-footer">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
            <div className="card-component">
              <div className="card-comp-img">
                <img
                  className="card-top-img"
                  src="assets/jorden-demo.jpeg"
                  alt="demo img"
                  srcset=""
                />
              </div>
              <div className="card-badge">new</div>
              <div className="card-comp-contant">
                <h2 className="card-h2">Air Jordan 4</h2>
                <h3 className="card-h3">by Nike</h3>
                <p className="card-para">
                  <h5>RS 10,000</h5>
                  <p className="discount-tag">30% off</p>
                </p>
              </div>
              <div className="card-btn-footer">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
            <div className="card-component">
              <div className="card-comp-img">
                <img
                  className="card-top-img"
                  src="assets/jorden-demo.jpeg"
                  alt="demo img"
                  srcset=""
                />
              </div>
              <div className="card-badge">new</div>
              <div className="card-comp-contant">
                <h2 className="card-h2">Air Jordan 4</h2>
                <h3 className="card-h3">by Nike</h3>
                <p className="card-para">
                  <h5>RS 10,000</h5>
                  <p className="discount-tag">30% off</p>
                </p>
              </div>
              <div className="card-btn-footer">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
            <div className="card-component">
              <div className="card-comp-img">
                <img
                  className="card-top-img"
                  src="assets/jorden-demo.jpeg"
                  alt="demo img"
                  srcset=""
                />
              </div>
              <div className="card-badge">new</div>
              <div className="card-comp-contant">
                <h2 className="card-h2">Air Jordan 4</h2>
                <h3 className="card-h3">by Nike</h3>
                <p className="card-para">
                  <h5>RS 10,000</h5>
                  <p className="discount-tag">30% off</p>
                </p>
              </div>
              <div className="card-btn-footer">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
            <div className="card-component">
              <div className="card-comp-img">
                <img
                  className="card-top-img"
                  src="assets/jorden-demo.jpeg"
                  alt="demo img"
                  srcset=""
                />
              </div>
              <div className="card-badge">new</div>
              <div className="card-comp-contant">
                <h2 className="card-h2">Air Jordan 4</h2>
                <h3 className="card-h3">by Nike</h3>
                <p className="card-para">
                  <h5>RS 10,000</h5>
                  <p className="discount-tag">30% off</p>
                </p>
              </div>
              <div className="card-btn-footer">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
            <div className="card-component">
              <div className="card-comp-img">
                <img
                  className="card-top-img"
                  src="assets/jorden-demo.jpeg"
                  alt="demo img"
                  srcset=""
                />
              </div>
              <div className="card-badge">new</div>
              <div className="card-comp-contant">
                <h2 className="card-h2">Air Jordan 4</h2>
                <h3 className="card-h3">by Nike</h3>
                <p className="card-para">
                  <h5>RS 10,000</h5>
                  <p className="discount-tag">30% off</p>
                </p>
              </div>
              <div className="card-btn-footer">
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
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
    </>
  );
};
export { home };
