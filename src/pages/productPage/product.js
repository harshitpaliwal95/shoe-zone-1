import { Navbar, ProductCard } from "../../components";
import { Filter } from "./filter";
import "./product.css";

export function Product() {
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Filter />
        <main className="main-product">
          <div className="grid-three"></div>
        </main>
      </section>
    </div>
  );
}
