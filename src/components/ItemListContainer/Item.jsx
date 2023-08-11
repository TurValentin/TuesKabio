import { Link } from "react-router-dom";

export default function Item( {producto} ) {
  return (
            <div className="card"> 
             <img className='img' src={`/img/${producto.img}`} alt={producto.nombre} />
                <div className="card-body">
                 <h5 className="card-title">{producto.titulo}</h5>
                 <p className="card-text">Precio: ${producto.precio}.</p>
                 <Link to={`/item/${producto.id}`} className="btn btn-primary button2">Ver mas</Link>
                 <Link to="/carrito" className="btn btn-primary button">Comprar <i className="bi bi-cart carrito"></i></Link>
                </div>
            </div>
  )
}
