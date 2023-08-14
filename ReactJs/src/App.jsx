import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Search } from "./components/Search";
import { ProductList } from "./components/ProductList";

export function App() {
  const product = ["Camiseta 1", "Camiseta 2", "Camiseta 3", "Camiseta 4"]

  return (
    <>
      <NavBar />
      <Search />
      <ProductList product={product} />
      <Footer>
        <p>Xicara Boa</p>
      </Footer>
      
    </>
  )
}