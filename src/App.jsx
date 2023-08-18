import './App.css'
import Footer from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContext } from './context/CartContext'
import { useState } from 'react'



function App() {

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (item, cantidad) => {
    const prodAgregado = {...item, cantidad}

    const nuevoCarrito = [...carrito]

    const enElCarrito = nuevoCarrito.find((producto) => producto.id === prodAgregado.id)

    if(enElCarrito){
      enElCarrito.cantidad += cantidad
    } else {
      nuevoCarrito.push(prodAgregado)
    }
    setCarrito(nuevoCarrito) 
  }


  return (
    <>
      <CartContext.Provider value={ {carrito, agregarAlCarrito} }>
        <BrowserRouter>
          <NavBar />
              <Routes>
                <Route path='/' element  = {<ItemListContainer />}/>
                <Route path='/item/:id' element  = { <ItemDetailContainer /> }/>
                <Route path='/productos' element  = {<ItemListContainer />}/>
                <Route path='/productos/:categoria' element  = {<ItemListContainer />}/>
                
              </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
      
      
      
    </>
    
  )
}

export default App
