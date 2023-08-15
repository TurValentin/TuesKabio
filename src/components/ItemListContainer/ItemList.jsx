import Item from "./Item"

export default function ItemList( {productos, titulo} ) {
  return (
    <div className='conteiner_products'>
        <h1 className='titulo'>{titulo}</h1>
        <div className="productos-container"> 
          {productos.length > 0 &&
            productos.map( (producto) => <Item key={producto.id} producto = {producto} />) }
        </div>
  </div>
  )
}
