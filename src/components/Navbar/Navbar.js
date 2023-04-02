import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cartContext from "../../context/cartContext";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { cart, getCartCount } = useContext(cartContext);

  const { pathname } = useLocation();
  const locationWSmallNav = ["item", "cart"];
  const currentLocation = pathname.split("/")[1];

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    setCartCount(getCartCount());
  }, [cart]);

  return (
    <header
      className={`Navbar ${showNav ? "active" : ""} ${
        locationWSmallNav.includes(currentLocation) ? "Navbar-item-detail" : ""
      }`}
    >
      <nav>
        <div className="brand-container">
          <div className="brand">
            <Link to="/">Carti</Link>
          </div>
          <div className="hamburguer-container">
            <FontAwesomeIcon
              className={`hamburguer ${showNav ? "active" : ""}`}
              onClick={toggleNavItems}
              icon={showNav ? faTimes : faBars}
            />
            {cartCount > 0 ? (
              <div className="cart-quantity">{cartCount}</div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="nav-links-container">
          <NavLink to="/categories" className="nav-link">
            Categorías
          </NavLink>
          <Link to="/cart" className="nav-link">
            <CartWidget cartCount={cartCount} />
          </Link>
        </div>
        <div className="nav-links-container-menu">
          <NavLink
            to="/categories"
            onClick={() => setShowNav(false)}
            className="nav-link"
          >
            Categorías
          </NavLink>
          <Link
            to="/cart"
            onClick={() => setShowNav(false)}
            className="nav-link"
          >
            <CartWidget cartCount={cartCount} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
