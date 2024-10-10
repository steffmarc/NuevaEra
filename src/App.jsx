import "./App.css";
import "bootstrap";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div className="appContainer">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/categoria/:idCategoria"
                element={<ItemListContainer />}
              />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
