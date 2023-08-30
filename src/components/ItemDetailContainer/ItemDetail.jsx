import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({ item }) {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="card item-container">
      <div className="card-body">
        <Link to="/" className="volver">
          <i className="bi bi-arrow-left-short"></i>
        </Link>
        <img className="imagen" src={`/img/${item.img}`} alt={item.nombre} />
      </div>
      <div className="card-body contenedor-info">
        <h5 className="card-title">{item.titulo}</h5>
        <p className="card-text">Precio: ${item.precio}.</p>
        <p className="card-text">Categoría: {item.categoria}.</p>
        <ItemCount
          handleSumar={handleSumar}
          handleRestar={handleRestar}
          cantidad={cantidad}
        />
        <Link
          to="/carrito"
          className="btn btn-primary button"
          onClick={() => {
            agregarAlCarrito(item, cantidad);
          }}
        >
          Agregar al <i className="bi bi-cart carrito"></i>
        </Link>
      </div>
    </div>
  );
}
