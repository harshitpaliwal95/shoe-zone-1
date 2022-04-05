import { Navbar } from "../../components";
import { useWishlist } from "../../context/wishlistContext";
import { WishCard } from "./components/wishCard";
import { empty_img } from "../../assets";

export function Wishlist() {
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <main className="main-product">
          {wishlist.length === 0 && (
            <div className="empty-box">
              <p className="heading-lg emptybox-text">
                Heyyy!! Heyyy!! Heyyy!!
              </p>
              <p className="heading-lg emptybox-text">Save Some Cool Shoes</p>
              <p className="heading-lg emptybox-text">Wishlist is empty</p>
              <div>
                <img src={empty_img} alt="empty wishlist img"></img>
              </div>
            </div>
          )}
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
