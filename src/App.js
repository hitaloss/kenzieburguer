import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { data } from "./data/Api.js";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [info, setInfo] = useState("");

  const total = currentSale.reduce(
    (acc, value) => (acc += Number(value.price)),
    0
  );

  useEffect(() => {
    data.get().then((res) => {
      setProducts(res.data);
      setFilteredProducts(res.data);
    });
  }, []);

  return (
    <>
      <Header
        products={products}
        setFilteredProducts={setFilteredProducts}
        setInfo={setInfo}
      />
      <main>
        <ProductsList
          products={products}
          filteredProducts={filteredProducts}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          info={info}
        />
        <Cart
          total={total}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      </main>
    </>
  );
}

export default App;
