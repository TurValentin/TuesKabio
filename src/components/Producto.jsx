export const Producto = ( {nombre, precio} ) => {



    return <div className='productos'>
            <div className='producto'>
              <h1>Nombre: {nombre}</h1>
              <p>Precio: {precio}</p>
            </div>
            <hr />
          </div>
  }