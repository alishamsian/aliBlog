import "./topbar.css";
import { BiBell, BiUser, BiX } from "react-icons/bi";
import images from "../../assets/index";
import { Link } from "react-router-dom";
const TopBar = () => {
  const user = true;
  return (
      <div className="navbar">
        <div className="row container d-flex">
          <div className="logo">
            <img src={images.logo} alt="" />
          </div>
          <div className="nav-list d-flex">
            <Link to="shop">Shop</Link>
            <Link to="/page">Pages</Link>
            <Link to="/about">About</Link>
            <Link to="/Lookups">Lookups</Link>
            <Link to="/">Home</Link>
            <div className="colse">
              <BiX />
            </div>
            <a href="/user" className="user-link">
              Login
            </a>
          </div>
          <div className="icons d-flex">
            {user && (
              <Link to="/create">
              <div className="icon d-flex user-icon">
                <BiUser />
              </div>
              </Link>
            )}
            <div className="icon d-flex">
              <BiBell />
              <span></span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TopBar;
