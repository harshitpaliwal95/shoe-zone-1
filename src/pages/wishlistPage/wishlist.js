import { Navbar } from "../../components";
import { useWishlist } from "../../context/wishlistContext";
import { WishCard } from "./components/wishCard";

export function Wishlist() {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;

  return (
    <div>
      <Navbar />
      {wishlist.length === 0 && (
        <div className="empty-box wishlist-box-placeholder">
          <p className="heading-lg emptybox-text">Wishlist is empty</p>
          <i className="bi bi-emoji-neutral"></i>
        </div>
      )}
      <section className="main-box wishlist-box">
        <div className="checkout-layout grid-three">
          {wishlist.map((product) => (
            <WishCard product={product} key={product._id} />
          ))}
        </div>
      </section>
    </div>
  );
}
