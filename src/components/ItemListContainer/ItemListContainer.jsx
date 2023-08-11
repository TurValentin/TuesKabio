import ItemList from './ItemList';
import './ItemListContainer.css'
import { pedirProductos } from '../../data/functions/pedirProductos';
import { useEffect, useState } from 'react'


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect( () => {
        pedirProductos() 
        .then((res) => {
            setProductos(res);     
        })
    }, [])

    return ( 
            <ItemList productos = {productos}/>
          )
}







