import { CartCard, PriceBox } from "./components";
import { Navbar } from "../../components";
import { empty_img } from "../../assets";
import "./cart.css";
import { useCart } from "../../context/cartContext";
export function Cart() {
  const { cartState } = useCart();
  const { cartItem } = cartState;
  return (
    <div>
      <Navbar />
      <section className="main-box">
        {cartItem.length === 0 && (
          <div className="empty-box">
            <p className="heading-lg emptybox-text">Heyyy!! Heyyy!! Heyyy!!</p>
            <p className="heading-lg emptybox-text">Shop Now Cart is Empty</p>
            <div>
              <img src={empty_img}></img>
            </div>
          </div>
        )}
        <main className="checkout-layout grid-two">
          <div className="cart-item">
            {cartItem.map((product) => (
              <CartCard key={product._id} product={product} />
            ))}
          </div>
          <div className="checkout-box">
            {cartItem.length > 0 && <PriceBox />}
          </div>
        </main>
      </section>
    </div>
  );
}
