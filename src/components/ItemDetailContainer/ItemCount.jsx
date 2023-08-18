

export default function ItemCount( {handleRestar, handleSumar, cantidad} ) {

  return (
        <div className="count">
          <button className="contador" onClick={handleRestar}>-</button>
          <p className="cantidad">Cantidad: {cantidad}</p>
          <button className="contador" onClick={handleSumar}>+</button>
        </div>
  )
}
