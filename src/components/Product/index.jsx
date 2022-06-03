import "./styles.css";

function Product({ item, addToCart }) {
  const floatNum = (number) => {
    return number && number % 1 === 0;
  };
  return (
    <section className="product-card">
      <figure>
        <img src={item.img} alt={item.name} />
      </figure>
      <p>{item.name}</p>
      <span>{item.category}</span>
      <small>
        R$ {item.price}
        {floatNum(item.price) && ".00"}
      </small>
      <button id={item.id} onClick={() => addToCart()}>
        Adicionar
      </button>
    </section>
  );
}

export default Product;
