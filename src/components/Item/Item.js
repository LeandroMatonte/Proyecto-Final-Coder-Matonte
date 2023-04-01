import { Link } from "react-router-dom";
import "../ItemListContainer/ItemListContainer.css";

const Item = ({ product }) => {
  return (
    <Link key={product.id} to={`/item/${product.id}`}>
      <div className="item">
        <div className="item-image-container">
          <img
            className="item-image"
            src={product ? product.image : ""}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="item-info">
          <h1 className="item-title">{product ? product.title : ""}</h1>
          <p className="item-price">$ {product ? product.price : ""}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
