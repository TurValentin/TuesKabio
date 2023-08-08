
export default function Item( {producto} ) {
  return (
            <div key={producto.id} className="card"> 
             <img className='img' src={`/img/${producto.img}`} alt={producto.nombre} />
                <div className="card-body">
                 <h5 className="card-title">{producto.titulo}</h5>
                 <p className="card-text">Precio: ${producto.precio}.</p>
                 <a href="#" className="btn btn-primary button">Comprar <i className="bi bi-cart carrito"></i></a>
                </div>
            </div>
  )
}
