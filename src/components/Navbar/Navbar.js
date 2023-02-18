import "./Navbar.css";
import logo from "../../logo192.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <header className="Navbar">
      <img height={50} className="nav-logo" src={logo} alt="logo" />
      <div className="nav-links-container">
        <a className="nav-link" href="#">
          Vestimenta
        </a>
        <a className="nav-link" href="#">
          Contacto
        </a>
        <a className="nav-link" href="#">
          <CartWidget />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
