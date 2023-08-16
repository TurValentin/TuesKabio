import React from 'react'
import { Link } from 'react-router-dom'

export default function SigamosConectados() {
  return (
    <div>
        <div className="container_conect">
            <h2 className='title'>Sigamos Conectados</h2>
            <Link className="linkConect icon" to = "/"><i className="bi bi-youtube"></i></Link>
            <Link className="linkConect icon" to = "/"><i className="bi bi-instagram"></i></Link>
            <Link className="linkConect icon" to = "/"><i className="bi bi-facebook"></i></Link>     
        </div>
        <div className="containerPay">
            <h2 className='title'>Formas de pago</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FDMXDCn_BxK2ACqeIn6dc4iGlHkEeYv6Jq6tT4YGEuyr7Ogp4JxRQ9klnl0Beqg--p4&usqp=CAU" alt="Formas de pago" className='footer_img' />
        </div>
    </div>
  )
}
