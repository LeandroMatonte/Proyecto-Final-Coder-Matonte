import "../ItemListContainer/ItemListContainer.css";

const ListItem = ({ producto }) => {
  return (
    <div className="list-item">
      <div className="list-item-image-container">
        <img className="list-item-image" src={producto.img} alt="" />
      </div>
      <div className="list-item-info">
        <div className="list-item-title">{producto.titulo}</div>
        <div className="list-item-price">$ {producto.precio}</div>
      </div>
    </div>
  );
};

export default ListItem;
