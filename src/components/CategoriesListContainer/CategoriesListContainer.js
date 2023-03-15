import { useEffect, useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import "./CategoriesListContainer.css";

const CategoriesListContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
      let data = await response.json();
      setCategories(data);
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
