import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const CartList = ({ cart, totalPrice }) => {
  return (
    <div className="app-container cart">
      <div className="cart-list-container">
        <div className="cart-list">
          {cart.length ? (
            cart.map((product) => {
              return <CartItem product={product} key={product.id} />;
            })
          ) : (
            <div className="empty-cart-message">
              <FontAwesomeIcon icon={faCartArrowDown} size="4x" color="#136F63" />
              Aún no tienes productos en el carrito
            </div>
          )}
        </div>
        {cart.length ? (
          <div className="total-price-container">
            <h2 className="total-price-title">Precio total:</h2>
            <div className="total-price-finish-button">
              <Link
                className="btn btn-primary btn-finish-purchase"
                to="/checkout_form"
              >
                Finalizar compra
              </Link>
              <p className="total-price">
                $ {totalPrice.toLocaleString("es-ES")}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartList;
