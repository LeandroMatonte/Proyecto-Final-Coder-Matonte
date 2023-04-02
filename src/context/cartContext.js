import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

const cartContext = createContext({
  cart: [],
});

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

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
    toast.success("Producto agregado", {
      iconTheme: {
        primary: "#3f88c5",
        secondary: "#FFFAEE",
      },
    });
  };

  const increaseProductQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      })
    );
  };

  const decreaseProductQuantity = (id) => {
    if (getProductQuantity(id) > 1) {
      setCart((currentCart) =>
        currentCart.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        })
      );
    }
  };

  const getProductQuantity = (id) => {
    const product = cart.find((product) => product.id === id);
    return product ? product.quantity : 0;
  };

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const isInCart = (id) => {
    return cart.findIndex((product) => product.id === id) >= 0;
  };

  const getCartCount = () => {
    const totalQuantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return totalQuantity;
  };

  const getCartTotalPrice = () => {
    const totalPrice = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    return totalPrice;
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        isInCart,
        getCartCount,
        increaseProductQuantity,
        decreaseProductQuantity,
        getProductQuantity,
        getCartTotalPrice,
        clear,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export { CartContextProvider };
export default cartContext;
