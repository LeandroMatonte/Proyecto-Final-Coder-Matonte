import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CartController.css";

const CartController = ({ product }) => {
  const {
    addItem,
    isInCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    getProductQuantity,
    removeItem,
  } = useContext(cartContext);
  const productQuantity = getProductQuantity(product.id);

  const addItemToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="product-controller-container">
      {isInCart(product.id) ? (
        <>
          <div className="button-controller-container">
            <button
              onClick={() => decreaseProductQuantity(product.id)}
              type="button"
              className="button-controller"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className="product-quantity">{productQuantity}</div>
            <button
              onClick={() => increaseProductQuantity(product.id)}
              type="button"
              className="button-controller"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            type="button"
            className="btn btn-delete"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      ) : (
        <button
          onClick={addItemToCart}
          type="button"
          className="btn btn-primary"
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default CartController;
