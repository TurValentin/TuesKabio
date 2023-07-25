import { useState } from 'react'
import './NavBar.css'
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    
    const [collapsed, setCollapsed] = useState (true)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="#">Tues Kabio</a>
                <button className="navbar-toggler botonHamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? (<span className="navbar-toggler-icon"></span>) : (<i class="bi bi-x-lg"></i>) }
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#">Todos los productos</a>
                        <a className="nav-link" href="#">Vinos</a>
                        <a className="nav-link" href="#">Cervezas</a>
                        <a className="nav-link" href="#">Vodkas</a>
                        <a className="nav-link" href="#">Whiskys</a>
                        <a className="nav-link" href="#">Aperitivos</a>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}