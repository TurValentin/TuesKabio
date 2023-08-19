import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link to="/carrito" className="nav-link">
        <i className="bi bi-cart carrito">
          <span className="numerito"> {cantidadEnCarrito()} </span>
        </i>
      </Link>
    </div>
  );
};
