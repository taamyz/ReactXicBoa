import "./style.css";

export function Search() {
  
  return (
   <form>
    <input 
      type="text"
      placeholder="Buscar Produto"
    />
    <button className="btnSearch">Buscar</button>
   </form>
  )
}