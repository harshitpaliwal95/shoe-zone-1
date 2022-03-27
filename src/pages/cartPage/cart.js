import { CartCard, PriceBox } from "./components";
import { Navbar } from "../../components";
import "./cart.css";
export function Cart() {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <main className="checkout-layout grid-two">
          <div className="cart-item">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div className="checkout-box">
            <PriceBox />
          </div>
        </main>
      </section>
    </div>
  );
}
