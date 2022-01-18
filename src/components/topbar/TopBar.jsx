import "./topbar.css";
import { BiBell , BiUser , BiX } from "react-icons/bi";
const TopBar = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="row container d-flex">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="nav-list d-flex">
            <a href="shop">Shop</a>
            <a href="/page">Pages</a>
            <a href="/about">About</a>
            <a href="/Lookups">Lookups</a>
            <a href="/">Home</a>
            <div className="colse">
              <BiX />
            </div>
            <a href="/user" className="user-link">
              Login
            </a>
          </div>
          <div className="icons d-flex">
            <div className="icon d-flex user-icon">
              <BiUser />
            </div>
            <div className="icon d-flex">
            <BiBell />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
