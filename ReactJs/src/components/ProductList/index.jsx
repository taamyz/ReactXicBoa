import style from "./style.module.css";
import icone from "../assets/add.svg";
import image from "../assets/images/cafe1.jpg"

export function ProductList({ product }) {

  return (
    <div className={style.container}>
      <ul>
        {product && 
          product.map((product, index) => {
            return (
              <li key={index}>
                {product}
                <button className={style.btnAdd}>
                  <img src={icone} />
                </button>
                <image className={style.image}>
                  <img src={image} />
                </image>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
