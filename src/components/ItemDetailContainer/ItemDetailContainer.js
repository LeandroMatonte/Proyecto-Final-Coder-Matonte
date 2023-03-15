import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cartContext from "../../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import Item from "../Item/Item";

import "swiper/css";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${id}`
      );
      const data = await response.json();
      setProduct(data);
    };

    getProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      const getSimilarProducts = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products/?offset=0&limit=10&categoryId=${product.category.id}`
        );
        let data = await response.json();
        data = data.filter((product) => product.id != id);
        setSimilarProducts(data);
      };

      getSimilarProducts();
    }
  }, [product]);

  const addPorductQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const subtractProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const { addItem, isInCart, removeItem } = useContext(cartContext);
  const addItemToCart = () => {
    addItem(product, productQuantity);
    setProductQuantity(1);
  };

  return (
    <div className="app-container item-detail">
      <div className="item-detail-container">
        <div className="item-detail-image-container">
          {!product.images ? (
            <Skeleton height={"100%"} />
          ) : (
            <img
              className="item-detail-image"
              src={product.images ? product.images[0] : ""}
              alt="logo"
            />
          )}
        </div>
        <div className="item-detail-details-container">
          <div className="item-detail-details">
            <h1 className="item-detail-title">
              {product.title || <Skeleton />}
            </h1>
            <p className="item-detail-price">
              {product ? `$ ${product.price}` : <Skeleton />}
            </p>

            <div className="product-controller-container">
              {isInCart(product.id) ? (
                <button
                  onClick={() => removeItem(product.id)}
                  type="button"
                  className="btn btn-delete"
                >
                  Eliminar del carrito
                </button>
              ) : (
                <>
                  <div className="button-controller-container">
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
                  </div>
                  <button
                    onClick={addItemToCart}
                    type="button"
                    className="btn btn-primary btn-add-to-cart"
                  >
                    Agregar al carrito
                  </button>
                </>
              )}
            </div>

            <p className="item-detail-description">
              {product.description || <Skeleton />}
            </p>
          </div>
        </div>
        {similarProducts.length ? (
          <>
            <h4 className="similar-products-title">Productos similares</h4>
            <Swiper
              className="swiper-similar-products"
              slidesPerView={4}
              spaceBetween={50}
            >
              {similarProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <Item product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
