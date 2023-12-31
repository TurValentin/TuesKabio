import "./App.css";
import Footer from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Carrito } from "./components/Carrito/Carrito";
import { Contactenos } from "./components/Contactenos/Contactenos";
import { Compra } from "./components/Compra/Compra";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/contacto" element={<Contactenos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/compra" element={<Compra />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
