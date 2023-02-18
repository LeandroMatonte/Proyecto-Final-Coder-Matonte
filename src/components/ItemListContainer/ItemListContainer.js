import "./ItemListContainer.css";
import ListItem from "../ListItem/ListItem";
import modelo1 from "../../img/modelo1.jpg";
import modelo2 from "../../img/modelo2.jpg";
import modelo3 from "../../img/modelo3.jpg";

const productos = [
  {
    id: 1,
    img: modelo1,
    titulo: "Blusa",
    precio: 1.899,
  },
  {
		id: 2,
    img: modelo2,
    titulo: "Conjunto",
    precio: 1.899,
  },
  {
		id: 3,
    img: modelo3,
    titulo: "Gorro",
    precio: 1.899,
  },
	{
    id: 4,
    img: modelo1,
    titulo: "Blusa",
    precio: 1.899,
  },
  {
		id: 5,
    img: modelo2,
    titulo: "Conjunto",
    precio: 1.899,
  },
  {
		id: 6,
    img: modelo3,
    titulo: "Gorro",
    precio: 1.899,
  },
	{
		id: 7,
    img: modelo1,
    titulo: "Blusa",
    precio: 1.899,
  },
  {
		id: 8,
    img: modelo2,
    titulo: "Conjunto",
    precio: 1.899,
  },
];

const ItemListContainer = () => {
  return (
    <div className="list-item-container">
      {productos.map((producto) => {
        return <ListItem key={producto.id} producto={producto} />;
      })}
    </div>
  );
};

export default ItemListContainer;
