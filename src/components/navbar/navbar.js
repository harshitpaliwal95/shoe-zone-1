import logo from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="user-ac">
          <div className="rightside">
            <button className="user-ac-btn join-btn">
              <Link to="/join">
                <p>Join Us</p>
              </Link>
            </button>
            <span>|</span>
            <button className="user-ac-btn sign-btn">
              <Link to="/login">
                <p>Log In</p>
              </Link>
            </button>
            <span>|</span>
            <button className="user-ac-btn help-btn">
              <p>Log Out</p>
            </button>
          </div>
        </div>
        <nav className="navbar">
          <div className="left-nav">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo img" />
              </Link>
            </div>
          </div>

          <ul className="nav-center">
            <li>
              <Link to="/product">Shop Now</Link>
            </li>
            <li>
              <Link to="/product">Men</Link>
            </li>
            <li>
              <Link to="/product">Women</Link>
            </li>
            <li>
              <Link to="/product">Kids</Link>
            </li>
          </ul>
          <div className="right-nav">
            <div className="search-navbar">
              <input type="text" placeholder="Search" />
              <button className="btn-icon">
                <i className="bi bi-search"></i>
              </button>
            </div>

            <div>
              <button className="btn-icon">
                <Link to="/wishlist">
                  <i className="bi bi-heart"></i>
                </Link>
              </button>
              <button className="btn-icon">
                <Link to="/cart">
                  <i className="bi bi-cart"></i>
                </Link>
              </button>
              <button className="btn-icon burger">
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export { Navbar };
