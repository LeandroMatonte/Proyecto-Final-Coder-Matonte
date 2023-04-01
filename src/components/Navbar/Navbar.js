import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { pathname } = useLocation();
  const locationWSmallNav = ["item", "cart"];
  const currentLocation = pathname.split("/")[1];

  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

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
          <FontAwesomeIcon
            className={`hamburguer ${showNav ? "active" : ""}`}
            onClick={toggleNavItems}
            icon={showNav ? faTimes : faBars}
          />
        </div>
        <div className="nav-links-container">
          <NavLink to="/categories" className="nav-link">
            Categorías
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contacto
          </NavLink>
          <Link to="/cart" className="nav-link">
            <CartWidget />
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
          <NavLink
            to="/contact"
            onClick={() => setShowNav(false)}
            className="nav-link"
          >
            Contacto
          </NavLink>
          <Link
            to="/cart"
            onClick={() => setShowNav(false)}
            className="nav-link"
          >
            <CartWidget />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
