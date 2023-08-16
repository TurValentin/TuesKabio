import ItemList from './ItemList';
import './ItemListContainer.css'
import { pedirProductos } from '../../data/functions/pedirProductos';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos")

    const categoria = useParams().categoria

    useEffect( () => {
        pedirProductos() 
        .then((res) => {
            if (categoria) {
                setProductos(res.filter((producto) => producto.categoria === categoria));
                setTitulo(categoria)
            } else {
                setProductos(res);
                setTitulo("Productos")
            }
                 
        })
    }, [categoria])

    return ( 
            <ItemList productos = {productos} titulo = {titulo}/>
          )
}







