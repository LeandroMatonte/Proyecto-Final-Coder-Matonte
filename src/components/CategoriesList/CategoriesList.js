import { Link } from "react-router-dom";

const CategoriesList = ({ categories }) => {
  return categories.map((category) => (
    <Link key={category.id} to={`/category/${category.id}`}>
      <div className="item">
        <div className="item-image-container">
          <img className="item-image" src={category.image} alt="" />
        </div>
        <div className="item-info">
          <h1 className="item-title">{category.name}</h1>
        </div>
      </div>
    </Link>
  ));
};

export default CategoriesList;
