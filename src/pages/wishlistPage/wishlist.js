import { Navbar } from "../../components";
import { WishCard } from "./components/wishCard";

export function Wishlist() {
  return (
    <div>
      <Navbar />
      <section class="main-box">
        <main class="main-product">
          <div class="grid-three">
            <WishCard />
            <WishCard />
            <WishCard />
            <WishCard />
            <WishCard />
          </div>
        </main>
      </section>
    </div>
  );
}
