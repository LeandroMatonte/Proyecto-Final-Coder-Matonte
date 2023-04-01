import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import Skeleton from "react-loading-skeleton";
import Item from "../Item/Item";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ItemDetailContainer.css";

import { db } from "../../database/firebase";
import { doc, getDoc } from "firebase/firestore";
import CartController from "../CartController/CartController";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      setProduct({ id: docSnap.id, ...docSnap.data() });
    };

    getProduct();
  }, [id]);

  // useEffect(() => {
  //   if (product) {
  //     const getSimilarProducts = async () => {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_API_URL}/products/?offset=0&limit=10&categoryId=${product.category.id}`
  //       );
  //       let data = await response.json();
  //       data = data.filter((product) => product.id !== parseInt(id));
  //       setSimilarProducts(data);
  //     };

  //     getSimilarProducts();
  //   }
  // }, [product]);

  const breakpointsSwiper = {
    768: {
      width: 768,
      slidesPerView: 2,
    },
    1200: {
      width: 1200,
      slidesPerView: 4,
    },
  };

  return (
    <div className="app-container item-detail">
      <div className="item-detail-container">
        <div className="item-detail-image-container">
          {!product.image ? (
            <Skeleton height={"100%"} />
          ) : (
            <img
              className="item-detail-image"
              src={product.image ? product.image : ""}
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
              {product.price ? `$ ${product.price}` : <Skeleton />}
            </p>

            <CartController product={product} />

            <p className="item-detail-description">
              {product.description || <Skeleton />}
            </p>
          </div>
        </div>
      </div>
      {similarProducts.length ? (
        <div className="similar-products-container">
          <h4 className="similar-products-title">Productos similares</h4>
          <Swiper
            className="swiper-similar-products"
            slidesPerView={1}
            spaceBetween={40}
            breakpoints={breakpointsSwiper}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
          >
            {similarProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Item product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemDetailContainer;
