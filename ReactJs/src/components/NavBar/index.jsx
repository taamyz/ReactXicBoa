import './style.css'
import { CartWidget } from "../CartWidget";

export function NavBar() {
  return (
    <div className="container">
      <h1>Xicara Boa</h1>

        <ul className="categories">
            <li><a href="#cat1">Camiseta</a></li>
            <li><a href="#cat2">Equipamentos</a></li>
            <li><a href="#cat3">Cafés</a></li>
        </ul>
      <CartWidget />
    </div>
  )
}


