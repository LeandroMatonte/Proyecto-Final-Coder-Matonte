import "../ItemListContainer/ItemListContainer.css";

const Item = ({ product }) => {
  return (
    <div className="item">
      <div className="item-image-container">
        <img className="item-image" src={product.images[0]} alt="" />
      </div>
      <div className="item-info">
        <h1 className="item-title">{product.title}</h1>
        <p className="item-price">$ {product.price}</p>
      </div>
    </div>
  );
};

export default Item;
