import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import EmptyCart from "../EmptyCart";
import "./styles.css";

function Cart({ currentSale, setCurrentSale, total }) {
  const removeCard = (product) => {
    const remove = currentSale.filter((item) => item !== product);
    setCurrentSale(remove);
  };

  return (
    <section className="cart">
      <div className="cart-name">Carrinho de compras</div>
      <section className="cart-products">
        {currentSale.length > 0 ? (
          currentSale.map((item) => (
            <section className="cart-card-container" key={item.id}>
              <CartProduct
                total={total}
                item={item}
                removeCard={() => removeCard(item)}
              />
            </section>
          ))
        ) : (
          <EmptyCart />
        )}
      </section>
      {currentSale.length > 0 && (
        <>
          <hr />
          <CartTotal setCurrentSale={setCurrentSale} total={total} />
        </>
      )}
    </section>
  );
}

export default Cart;
