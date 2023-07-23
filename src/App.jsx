import { useState } from 'react'
import './App.css'
import { Producto } from './components/Producto'



function App() {
  return (
    <div>
      <Producto nombre="Fernet" precio = '$2700'  />
      <Producto nombre="Gancia" precio = '$1800'  />
      <Producto nombre="Vodka" precio = '$2600'  />
      
      
    </div>
    
  )
}

export default App
