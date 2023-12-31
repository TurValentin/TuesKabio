import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./carrito.css";
import { Link } from "react-router-dom";

export const Carrito = () => {
  const { carrito, precioTotal, handleVaciar, handleEliminar } =
    useContext(CartContext);

  return (
    <div className="contenedor-productos">
      <h1 className="title-cart">Tu Carrito</h1>

      {carrito.map((producto) => {
        return (
          <div className="contenedor-producto" key={producto.id}>
            <h3 className="all titleProd">{producto.titulo}</h3>
            <p className="all cant">Cantidad: {producto.cantidad}</p>
            <p className="all onlyPrice">
              Precio por unidad: ${producto.precio}
            </p>
            <p className="all priceTotal">
              Precio total: ${producto.precio * producto.cantidad}
            </p>
            <button
              className="eliminar"
              onClick={() => handleEliminar(producto)}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        );
      })}

      {carrito.length > 0 ? (
        <div className="contenedor-final">
          <button className="buttonVaciar" onClick={handleVaciar}>
            Vaciar carrito
          </button>
          <div className="contenedorComprar">
            <span className="total">
              <p className="totalNum">Total: ${precioTotal()}</p>
            </span>
            <Link to="/compra">
              <button className="buttonComprar">Comprar ahora</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2 className="cartVacio">El carrito esta vacío :( </h2>
          <div className="contenedor-agregar">
            <p className="agregarProductos">¿Quieres agregar productos?</p>
            <p className="arrow">
              <i className="bi bi-arrow-right"></i>
            </p>
            <Link className="seguirComprando" to="/">
              Ir<i className="bi bi-bag-plus-fill"></i>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
