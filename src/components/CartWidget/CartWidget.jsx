import { Link } from 'react-router-dom'
import './CartWidget.css'

export const CartWidget = () => {

    return  <div>
                <Link to = '/carrito' className='nav-link'><i className="bi bi-cart carrito">0</i></Link>
            </div>

}