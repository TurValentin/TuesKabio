import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (item, cantidad) => {
    const prodAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];

    const enElCarrito = nuevoCarrito.find(
      (producto) => producto.id === prodAgregado.id
    );

    if (enElCarrito) {
      enElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(prodAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const handleVaciar = () => {
    return setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        handleVaciar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
