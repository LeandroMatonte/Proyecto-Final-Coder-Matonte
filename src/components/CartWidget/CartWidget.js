import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
      <div className="cart-button">
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="cart-quantity">2</div>
      </div>
  );
};

export default CartWidget;
