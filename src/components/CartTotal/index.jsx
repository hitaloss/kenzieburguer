import "./styles.css";

function CartTotal({ total, setCurrentSale }) {
  return (
    <section className="cart-total">
      <div>
        <span className="total">Total</span>
        <span className="value">R$ {total.toFixed(2)}</span>
      </div>
      <button onClick={() => setCurrentSale([])}>Remover todos</button>
    </section>
  );
}

export default CartTotal;
