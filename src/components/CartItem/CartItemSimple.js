import { Link } from "react-router-dom";

const CartItemSimple = ({ product }) => {
  return (
    <div className="cart-item simple">
      <Link to={`/item/${product.id}`}>
        <h1 className="cart-item-title">{product.quantity} x {product ? product.title : ""}</h1>
      </Link>
      <p className="cart-item-price">
        {product
          ? "$ " + (product.price * product.quantity).toLocaleString("es-UY")
          : ""}
      </p>
    </div>
  );
};

export default CartItemSimple;
