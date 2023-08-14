import './style.css'
import icone from "../assets/cart.svg";

export function CartWidget() {
  
    return (
         <button className={style.btnBuy}>
           <img src={icone} />
         </button>
    )
  }