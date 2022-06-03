import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Product from "../Product";
import "./styles.css";

function ProductsList({
  products,
  filteredProducts,
  currentSale,
  setCurrentSale,
  info,
}) {
  const addToCart = (itemId) => {
    const filter = products.find((element) => itemId === +element.id);
    const verifyId = currentSale.filter((element) => element.id === itemId);
    verifyId.length === 0
      ? setCurrentSale([...currentSale, filter])
      : toast.error("Produto já inserido no carrinho");
  };

  return (
    <section className="container-all">
      {info.length > 0 ? (
        <span className="search-result">
          Resultados para: <strong>{info}</strong>
        </span>
      ) : null}
      <section className="container-products">
        {filteredProducts.map((item) => (
          <Product
            item={item}
            key={item.id}
            setCurrentSale={setCurrentSale}
            addToCart={() => addToCart(item.id)}
          />
        ))}

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </section>
  );
}

export default ProductsList;
