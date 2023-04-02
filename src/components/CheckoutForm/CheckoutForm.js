import React, { useState, useContext, useEffect } from "react";
import { db } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import cartContext from "../../context/cartContext";
import "./CheckoutForm.css";
import CartItemSimple from "../CartItem/CartItemSimple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, getCartTotalPrice, clear } = useContext(cartContext);
  const [checkOutNumber, setCheckOutNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [checkoutData, setCheckoutData] = useState({
    name: "",
    surname: "",
    email: "",
    email2: "",
    phoneNumber: "",
    products: cart,
  });

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(getCartTotalPrice());
  }, [cart]);

  const checkOut = async () => {
    setIsLoading(true);
    const response = await addDoc(collection(db, "checkouts"), {
      name: checkoutData.name,
      surname: checkoutData.surname,
      email: checkoutData.email,
      phoneNumber: checkoutData.phoneNumber,
      products: checkoutData.products.map((product) => ({
        id: product.id,
        price: product.price,
        quantity: product.quantity,
      })),
    });
    clear();
    setCheckOutNumber(response.id);
    setIsLoading(false);
  };

  const isValid = () => {
    return (
      checkoutData.name !== "" &&
      checkoutData.surname !== "" &&
      checkoutData.email !== "" &&
      checkoutData.phoneNumber !== "" &&
      checkoutData.products.length > 0
    );
  };

  const updateCheckoutData = (e) => {
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };
  return (
    <div className="app-container cart checkout">
      {checkOutNumber ? (
        <div className="checkout-form-container completed-purcharse">
          <div className="completed-purcharse-container">
            <FontAwesomeIcon icon={faCircleCheck} color="#136F63" size="2x" />
            <h2>Tu compra fue completada con éxito, código de compra:</h2>
            <h1>{checkOutNumber}</h1>
            <Link className="btn btn-primary" to="/">Seguir comprando</Link>
          </div>
        </div>
      ) : (
        <form className="checkout-form-container">
          <div className="checkout-details">
            {cart.map((product) => (
              <CartItemSimple product={product} key={product.id} />
            ))}
            <div className="checkout-details-total">
              <h5>Total: </h5>
              <h5>$ {totalPrice.toLocaleString("es-ES")}</h5>
            </div>
          </div>
          <div className="form-container">
            <h3 className="checkout-description">
              Completa el siguiente formulario para finalizar tu compra
            </h3>
            <input
              type="text"
              name="name"
              onChange={updateCheckoutData}
              placeholder="Nombre"
              value={checkoutData.name}
            />
            <input
              type="text"
              name="surname"
              onChange={updateCheckoutData}
              placeholder="Apellido"
              value={checkoutData.surname}
            />
            <input
              type="text"
              name="email"
              onChange={updateCheckoutData}
              placeholder="Email"
              value={checkoutData.email}
            />
            <input
              type="text"
              name="email2"
              onChange={updateCheckoutData}
              placeholder="Repetir Email"
              value={checkoutData.email2}
            />
            <input
              type="text"
              name="phoneNumber"
              onChange={updateCheckoutData}
              placeholder="Número de teléfono"
              value={checkoutData.phoneNumber}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={checkOut}
              disabled={!isValid() || isLoading}
            >
              {isLoading ? <span className="loader"></span> : "Finalizar"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
