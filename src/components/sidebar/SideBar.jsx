import { Link } from "react-router-dom";
import "./sideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-item">
      <span className="sidebar-title">ABOUT ME</span>
      <img
        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        alt=""
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebar-item">
      <span className="sidebar-title">CATEGORIES</span>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link className="link" to="/posts?cat=Life">
            Life
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="link" to="/posts?cat=Music">
            Music
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="link" to="/posts?cat=Sport">
            Sport
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="link" to="/posts?cat=Style">
            Style
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="link" to="/posts?cat=Tech">
            Tech
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="link" to="/posts?cat=Cinema">
            Cinema
          </Link>
        </li>
      </ul>
    </div>
    <div className="sidebar-item">
      <span className="sidebar-title">FOLLOW US</span>
      <div className="sidebar-social">
        <i className="sidebar-icon fab fa-facebook-square"></i>
        <i className="sidebar-icon fab fa-instagram-square"></i>
        <i className="sidebar-icon fab fa-pinterest-square"></i>
        <i className="sidebar-icon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
  );
};

export default SideBar;
