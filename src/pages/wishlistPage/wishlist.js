import { Navbar } from "../../components";
import { useWishlist } from "../../context/wishlistContext";
import { WishCard } from "./components/wishCard";

export function Wishlist() {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <main className="main-product">
          <div className="grid-three">
            {wishlist.map((product) => (
              <WishCard product={product} key={product._id} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
