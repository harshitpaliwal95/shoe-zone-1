// import logo from "../../../public/assets/nav-logo.png";
import logo from "../../assets/nav-logo.png";
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="user-ac">
          <div className="rightside">
            <button className="user-ac-btn help-btn">
              <p>Help</p>
            </button>
            <span>|</span>
            <button className="user-ac-btn join-btn">
              <p>Join Us</p>
            </button>
            <span>|</span>
            <button className="user-ac-btn sign-btn">
              <p>Sign In</p>
            </button>
          </div>
        </div>
        <nav className="navbar">
          <div className="left-nav">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="logo img" />
              </a>
            </div>
          </div>

          <ul className="nav-center">
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
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
                <i className="bi bi-heart"></i>
              </button>
              <button className="btn-icon">
                <i className="bi bi-cart"></i>
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
