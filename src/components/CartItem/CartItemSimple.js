import { Link } from "react-router-dom";

const CartItemSimple = ({ product }) => {
  return (
    <div className="cart-item simple">
      <h1 className="cart-item-title">
        {product.quantity} x {product ? product.title : ""}
      </h1>
      <p className="cart-item-price">
        {product
          ? "$ " + (product.price * product.quantity).toLocaleString("es-UY")
          : ""}
      </p>
    </div>
  );
};

export default CartItemSimple;
