import { Navbar } from "../../components";
import "./product.css";
import { Filter, ProductCard } from "./card-componet";
import { UseFilter } from "../../context/filterContext";
import { FetchData } from "../../fetch/fetch";
export function Product() {
  const { state, dispatch } = UseFilter();
  FetchData();
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Filter />
        <main className="main-product">
          <div className="grid-three">
            {state.product.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
