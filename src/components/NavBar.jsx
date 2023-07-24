import { CartWidget } from "./CartWidget/CartWidget"

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Tues Kabio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">Todos los productos</a>
                        <a class="nav-link" href="#">Vinos</a>
                        <a class="nav-link" href="#">Cervezas</a>
                        <a class="nav-link" href="#">Vodkas</a>
                        <a class="nav-link" href="#">Whiskys</a>
                        <a class="nav-link" href="#">Aperitivos</a>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}