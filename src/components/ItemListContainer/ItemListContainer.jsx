import ItemList from "./ItemList";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

import { fireStore } from "../../firebase/firebase";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(fireStore, "Productos");

    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return <ItemList productos={productos} titulo={titulo} />;
};
