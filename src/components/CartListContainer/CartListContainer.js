import "./CartListContainer.css";
import { useContext, useEffect, useState } from "react";
import cartContext from "../../context/cartContext";
import CartList from "../CartList/CartList";

const CartListContainer = () => {
  const { cart, getCartTotalPrice } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    setTotalPrice(getCartTotalPrice());
  }, [cart]);

  return <CartList cart={cart} totalPrice={totalPrice} />;
};

export default CartListContainer;
