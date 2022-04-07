import logo from "../../assets/nav-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filterContext";

const Navbar = () => {
  const { dispatch } = useFilter();

  const navigate = useNavigate();
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
            <li
              onClick={() => {
                navigate("/product");
                dispatch({ type: "FILTER", payload: "" });
              }}
            >
              Shop Now
            </li>
            <li
              onClick={() => {
                navigate("/product");
                dispatch({ type: "FILTER", payload: "men" });
              }}
            >
              Men
            </li>
            <li
              onClick={() => {
                navigate("/product");
                dispatch({ type: "FILTER", payload: "women" });
              }}
            >
              Women
            </li>
            <li
              onClick={() => {
                navigate("/product");
                dispatch({ type: "FILTER", payload: "kid" });
              }}
            >
              Kids
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
