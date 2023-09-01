import { Link } from "react-router-dom";
import "./ItemListContainer.css";

export default function Item({ producto }) {
  return (
    <div className="card">
      <img
        className="img"
        src={`/img/${producto.imagen}`}
        alt={producto.nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text">Precio: ${producto.precio}.</p>
        <Link to={`/item/${producto.id}`} className="btn btn-primary button2">
          Ver mas
        </Link>
      </div>
    </div>
  );
}
