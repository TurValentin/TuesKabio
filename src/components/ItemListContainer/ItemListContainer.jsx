import './ItemListContainer.css'
import data from "../../data/productos.json"
import { useEffect, useState } from 'react'


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect( () => {
        pedirProductos() 
        .then((res) => {
            setProductos(res);     
        })
    }, [])

    return ( 
        <div className='conteiner_products'>
        <h1 className='titulo'>Productos</h1>
        <div className="productos-container"> 
          {productos.length > 0 &&
            productos.map((producto) => {
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
            })}
        </div>
      </div>
    );
  
        }




