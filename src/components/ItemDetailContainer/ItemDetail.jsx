import { useState } from "react";
import { Link } from "react-router-dom";
import './ItemDetail.css'

export default function ItemDetail({item}) {


  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
    setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
    if(cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
            <div className="card item-container"> 
                <div className="card-body">
                  <Link to= "/" className="volver"><i class="bi bi-arrow-left-short"></i></Link>
                  <img className='img' src={`/img/${item.img}`} alt={item.nombre} />
                </div>
                <div className="card-body contenedor-info">
                 <h5 className="card-title">{item.titulo}</h5>
                 <p className="card-text">Precio: ${item.precio}.</p>
                 <p className="card-text">Categoría: {item.categoria}.</p>
                 <div className="count">
                  <button className="contador" onClick={handleRestar}>-</button>
                  <p className="cantidad">Cantidad: {cantidad}</p>
                  <button className="contador" onClick={handleSumar}>+</button>
                 </div>
                 <Link to="/carrito" className="btn btn-primary button">Comprar <i className="bi bi-cart carrito"></i></Link>
                 
                </div>
               
            </div>
  )
}
