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
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
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

  useEffect(() => {
    if (product) {
      const getSimilarProducts = async () => {
        setSimilarProducts([]);
        const productsCollection = collection(db, "products");
        let q = productsCollection;
        q = query(productsCollection, where("category", "==", product.category));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }));
        setSimilarProducts(data.filter((document) => document.id !== product.id));
      };

      getSimilarProducts();
    }
  }, [product]);

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
              {product ? `$ ${parseInt(product.price).toLocaleString("es-UY")}` : <Skeleton />}
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
        <Skeleton height={"400px"}/>
      )}
    </div>
  );
};

export default ItemDetailContainer;
