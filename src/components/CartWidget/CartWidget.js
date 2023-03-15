import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

const CartWidget = () => {
  const { cartCount } = useContext(cartContext);
  return (
    <div className="cart-button">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="cart-quantity">{cartCount}</div>
    </div>
  );
};

export default CartWidget;
