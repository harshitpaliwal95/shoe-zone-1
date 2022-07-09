import { Navbar, ProductCard, Filter, Loader } from "../../components";
import "./product.css";
import { useFilter } from "../../context/filterContext";
import axios from "axios";
import { useEffect } from "react";
import {
  sortData,
  filterByCategory,
  latestProduct,
  ratingSlider,
  searchBy,
} from "../../utils";

export function Product() {
  const { state, dispatch } = useFilter();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");

        if (response) {
          setTimeout(() => {
            dispatch({ type: "DEFAULT", payload: response.data.products });
          }, 800);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [dispatch]);

  const newSortdata = sortData(state.product, state.sortBy);
  const newCategory = filterByCategory(newSortdata, state.category);
  const filterData = latestProduct(newCategory, state.category);
  const newFilterData = ratingSlider(filterData, state.rating);
  const searchProduct = searchBy(newFilterData, state.searchBy);

  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Filter />
        <main className="main-product">
          {newFilterData.length === 0 && <Loader />}
          <div className="grid-three">
            {searchProduct.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
