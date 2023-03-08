import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const getProduct = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${params.id}?offset=0&limit=10`
    );
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const addPorductQuantity = () => setProductQuantity(productQuantity + 1);
  const subtractProductQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <div className="app-container item-detail">
      <div className="item-detail-container">
        <div className="item-detail-image-container">
          <img
            className={`item-detail-image ${!product.images ? "loading" : ""}`}
            src={product.images ? product.images[0] : ""}
          />
        </div>
        <div className="item-detail-details-container">
          <div className="item-detail-details">
            <h1 className="item-detail-title">{product.title}</h1>
            <p className="item-detail-price">$ {product.price}</p>
            <p className="item-detail-description">{product.description}</p>

            <button className="btn btn-primary">Agregar al carrito</button>

            {/* <div className="button-controller-container">
              <button
                onClick={subtractProductQuantity}
                type="button"
                className="button-controller"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <div>{productQuantity}</div>
              <button
                onClick={addPorductQuantity}
                type="button"
                className="button-controller"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
