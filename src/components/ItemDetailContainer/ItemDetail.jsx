import { Link } from "react-router-dom";


export default function ItemDetail({item}) {
  return (
            <div className="card item-container"> 
             <img className='img' src={`/img/${item.img}`} alt={item.nombre} />
                <div className="card-body">
                 <h5 className="card-title">{item.titulo}</h5>
                 <p className="card-text">Precio: ${item.precio}.</p>
                 <p className="card-text">Categoría: {item.categoria}.</p>
                 <Link to="/carrito" className="btn btn-primary button">Comprar <i className="bi bi-cart carrito"></i></Link>
                </div>
            </div>
  )
}
