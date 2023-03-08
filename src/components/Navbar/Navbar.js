import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={`Navbar ${
        pathname.startsWith("/item/") ? "Navbar-item-detail" : ""
      }`}
    >
      <nav>
        <div className="brand">
          <Link to="/">Carti</Link>
        </div>
        <div className="nav-links-container">
          <Link to="/categories" className="nav-link">
            Categorías
          </Link>
          <Link to="/contact" className="nav-link">
            Contacto
          </Link>
          <Link to="/cart" className="nav-link">
            <CartWidget />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
