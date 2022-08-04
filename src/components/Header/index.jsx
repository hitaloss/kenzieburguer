import { useState } from "react";
import "./styles.css";

function Header({ products, setFilteredProducts, setInfo }) {
  const [value, setValue] = useState("");

  const filter = (value) => {
    const valueInput = new RegExp(`${value}`, "gi");
    const res = products.filter(
      (element) => element.name.search(valueInput) !== -1
    );
    if (value === "") {
      setFilteredProducts(products);
      setInfo("");
    } else {
      setFilteredProducts(res);
      setInfo(value);
    }
  };

  const clear = () => {
    setValue("");
  };
  return (
    <header>
      <span>
        Kenzie<strong> Burger</strong>
      </span>
      <div>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            filter(value);
            setTimeout(() => clear(), 300);
          }}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
}

export default Header;
