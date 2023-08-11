import './App.css'
import Footer from './components/Footer/Footer'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './data/routes/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    <>

      <BrowserRouter>
      <NavBar />
          <Routes>
            <Route path='/' element  = {<ItemListContainer />}/>
            <Route path='/carrito' element  = {<Cart />}/>
          </Routes>
      <ItemDetailContainer itemId = {2}/>
      <Footer />
      </BrowserRouter>
      
      
      
    </>
    
  )
}

export default App
