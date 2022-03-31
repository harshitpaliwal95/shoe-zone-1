import { CartCard, PriceBox } from "./components";
import { Navbar } from "../../components";
import "./cart.css";
import { useCart } from "../../context/cartContext";
export function Cart() {
  const { cartState } = useCart();
  const { cartItem } = cartState;
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <main className="checkout-layout grid-two">
          <div className="cart-item">
            {cartItem.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </div>
          <div className="checkout-box">
            <PriceBox />
          </div>
        </main>
      </section>
    </div>
  );
}
