import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="link-container">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>AboutUs</li>
          </Link>
          <Link to="/contact">
            <li>ContactUs</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <button className="login-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button> 
        </ul>
      </div>
    </div>
  );
};
export default Header;