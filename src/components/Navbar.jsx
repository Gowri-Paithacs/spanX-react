import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="SnapX Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto menu-box">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PHOTOS & VIDEOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CATEGORIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                USERS
              </a>
            </li>
          </ul>
          <a href="#" className="btn signin-btn">
            <i className="fa-solid fa-user"></i> Sign In/Up
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
