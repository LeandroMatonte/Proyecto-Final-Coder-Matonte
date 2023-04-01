import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import "./CategoriesListContainer.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/firebase";

const CategoriesListContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const querySnapshot = await getDocs(categoriesCollection);
        const data = querySnapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }));
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="app-container">
      <div className="categories-container">
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
};

export default CategoriesListContainer;
