import "./styles.css";

function CartProduct({ item, removeCard }) {
  return (
    <>
      <figure className="cart-card">
        <img src={item.img} alt={item.name} />
      </figure>
      <div className="texts">
        <p className="texts-name">{item.name}</p>
        <p className="texts-category">{item.category}</p>
      </div>
      <div className="buttons">
        <button onClick={() => removeCard()}>Remover</button>
      </div>
    </>
  );
}

export default CartProduct;
