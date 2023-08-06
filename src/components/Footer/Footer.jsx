import React from 'react'
import './Footer.css'
import SigamosConectados from './SigamosConectados'
import Contacto from './contacto'
import Negocios from './Negocios'

export default function Footer() {
  return (
    <div className='footer_container'>
        <SigamosConectados />
        <Contacto />
        <Negocios />
    </div>
  )
}
