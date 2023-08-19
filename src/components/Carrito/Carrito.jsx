import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Carrito = () => {
  const { carrito, precioTotal, handleVaciar } = useContext(CartContext);

  return (
    <div className="contenedor-productos">
      <h1>Carrito</h1>

      {carrito.map((producto) => {
        return (
          <div className="contenedor-producto" key={producto.id}>
            <h3>{producto.titulo}</h3>
            <p>Precio por unidad: ${producto.precio}</p>
            <p>Precio total: ${producto.precio * producto.cantidad}</p>
            <p>cant: {producto.cantidad}</p>
          </div>
        );
      })}

      {carrito.length > 0 ? (
        <>
          <h2>Precio Final: ${precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar</button>
        </>
      ) : (
        <h2>El carrito esta vacío :( </h2>
      )}
    </div>
  );
};
