import { useState } from 'react'
import './NavBar.css'
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

export const NavBar = () => {
    
    const [collapsed, setCollapsed] = useState (true)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to='/'>Tues Kabio</Link>
                <button className="navbar-toggler botonHamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? (<span className="navbar-toggler-icon"></span>) : (<i class="bi bi-x-lg"></i>) }
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to='/'>Todos los productos</Link>
                        <Link className="nav-link" to='/'>Vinos</Link>
                        <Link className="nav-link" to='/'>Cervezas</Link>
                        <Link className="nav-link" to='/'>Vodkas</Link>
                        <Link className="nav-link" to='/'>Whiskys</Link>
                        <Link className="nav-link" to='/'>Aperitivos</Link>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}