import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="app-container">
      <div className="list-item-container">
        {products.map((product) => {
          return <Item product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
