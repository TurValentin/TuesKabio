import React from 'react'

export default function SigamosConectados() {
  return (
    <div>
        <div className="container_conect">
            <h2 className='title'>Sigamos Conectados</h2>
            <a href="" className="linkConect"><i class="bi bi-youtube"></i></a>
            <a href="" className="linkConect"><i class="bi bi-instagram"></i></a>
            <a href="" className="linkConect"><i class="bi bi-facebook"></i></a>     
        </div>
        <div className="containerPay">
            <h2 className='title'>Formas de pago</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FDMXDCn_BxK2ACqeIn6dc4iGlHkEeYv6Jq6tT4YGEuyr7Ogp4JxRQ9klnl0Beqg--p4&usqp=CAU" alt="Formas de pago" className='footer_img' />
        </div>
    </div>
  )
}
