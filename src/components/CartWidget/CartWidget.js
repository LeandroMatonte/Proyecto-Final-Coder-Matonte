import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartContext";

const CartWidget = () => {
  const { cart, getCartCount } = useContext(cartContext);
  const [cartCount, setCartCount] = useState(0);
  
  useEffect(() => {
    setCartCount(getCartCount());
  }, [cart]);
  return (
    <div className="cart-button">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="cart-quantity">{cartCount}</div>
    </div>
  );
};

export default CartWidget;
