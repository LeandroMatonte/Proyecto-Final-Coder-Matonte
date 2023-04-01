import "./App.css";
import 'react-loading-skeleton/dist/skeleton.css'
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoriesListContainer from "./components/CategoriesListContainer/CategoriesListContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartListContainer from "./components/CartListContainer/CartListContainer";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route
            exact
            path="/categories"
            element={<CategoriesListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartListContainer />} />
          <Route exact path="/checkout_form" element={<CheckoutForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
