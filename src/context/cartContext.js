import { createContext, useEffect, useState } from "react";

const cartContext = createContext({
  cart: [],
});

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItem = (item, quantity) => {
    let newCart = cart;
    const productIndex = newCart.findIndex((product) => product.id === item.id);
    if (productIndex >= 0) {
      item.quantity = quantity + newCart[productIndex].quantity;
      newCart[productIndex] = item;
    } else {
      item.quantity = quantity;
      newCart = [...newCart, item];
    }
    setCart(newCart);
  };

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const isInCart = (id) => {
    return cart.findIndex((product) => product.id === id) >= 0;
  };

  useEffect(() => {
    const getCartCount = () => {
      const totalQuantity = cart.reduce(
        (total, product) => total + product.quantity,
        0
      );
      setCartCount(totalQuantity);
    };

    getCartCount();
  }, [cart]);

  // const clear = () => {
  //   setCart([]);
  // };

  return (
    <cartContext.Provider
      value={{ cart, cartCount, addItem, removeItem, isInCart }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export { CartContextProvider };
export default cartContext;
