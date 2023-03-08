import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="app-container">
      <div className="list-item-container">
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/item/${product.id}`}>
              <Item product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
