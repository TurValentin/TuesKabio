import { useForm } from "react-hook-form";
import "./Contactenos.css";

export const Contactenos = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="conteiner-form">
      <h1 className="title-form">Contáctenos</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
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
          Enviar
        </button>
      </form>
    </div>
  );
};
