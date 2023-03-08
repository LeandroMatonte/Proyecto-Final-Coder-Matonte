import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const filterByCategory = (products) => {
      return products.filter((product) => product.category.id === parseInt(id));
    };

    const getProducts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products?offset=0&limit=36`
      );
      let data = await response.json();
      if (id) {
        data = filterByCategory(data);
      }
      setProducts(data);
    };
    
    getProducts();
  }, [id]);

  return <ItemList products={products}></ItemList>;
};

export default ItemListContainer;
