import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../database/firebase";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        let q = productsCollection;
        if (id) {
          const categoriesRef = doc(db, 'categories', id);
          q = query(productsCollection, where("category", "==", categoriesRef));
        }
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }));
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [id]);

  return <ItemList products={products} />;
};

export default ItemListContainer;
