import { Navbar, ProductCard, Filter } from "../../components";
import "./product.css";
import { useFilter } from "../../context/filterContext";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  sortData,
  filterByCategory,
  latestProduct,
  ratingSlider,
  searchBy,
} from "../../utils";

export function Product() {
  const { state, dispatch } = useFilter();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        dispatch({ type: "DEFAULT", payload: response.data.products });
        setProduct(response.data.products);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  const newSortdata = sortData(product, state.sortBy);
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
