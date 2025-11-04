import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import CartContext from "../../context/CartContext"; 
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const { cartList } = useContext(CartContext); 
  const cartCount = cartList.length;

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/" className="nav-logo-link">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="cart-link-container">
            <Link to="/cart" className="nav-link">
              Cart
              {cartCount > 0 && (
                <span className="cart-count-badge">{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>

        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
