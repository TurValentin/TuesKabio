import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { fireStore } from "../../firebase/firebase";
import { Link } from "react-router-dom";

export const Compra = () => {
  const [pedidoID, setPedidoId] = useState("");
  const { carrito, precioTotal, handleVaciar } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      Cliente: data,
      Productos: carrito,
      Total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(fireStore, "Pedidos");
    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      handleVaciar();
    });
  };

  if (pedidoID) {
    return (
      <div className="conteiner-form">
        <h1 className="title-form">Muchas gracias por tu compra :)</h1>
        <p>Tu numero de pedido es: {pedidoID}</p>
        <Link className="seguirComprando" to="/">
          ¿Quieres seguir comprando? <i className="bi bi-bag-plus-fill"></i>
        </Link>
      </div>
    );
  }

  return (
    <div className="conteiner-form">
      <h1 className="title-form">Finalizá tu compra!</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          className="input-form"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresá tu email"
          className="input-form"
          {...register("email")}
        />
        <button type="submit" className="button-form">
          Comprar
        </button>
      </form>
    </div>
  );
};
