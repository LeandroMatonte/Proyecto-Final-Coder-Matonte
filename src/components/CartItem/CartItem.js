import { Link } from "react-router-dom";
import CartController from "../CartController/CartController";

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-info-container">
        <img
          className="cart-item-image"
          src={product ? product.image : ""}
          alt=""
          width="320px"
          height="240px"
          loading="lazy"
        />
        <Link to={`/item/${product.id}`}>
          <h1 className="cart-item-title">{product ? product.title : ""}</h1>
        </Link>
      </div>
      <div className="cart-item-info">
        <CartController product={product} type="cart" />
        <p className="cart-item-price">$ {product ? parseInt(product.price * product.quantity).toLocaleString('es-UY') : ""}</p>
      </div>
    </div>
  );
};

export default CartItem;
