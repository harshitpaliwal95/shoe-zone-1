import { Navbar } from "../../components";
import "./product.css";
import { Filter, ProductCard } from "./componets";
import { useFilter } from "../../context/filterContext";
import { FetchData } from "../../fetch/fetch";
import { useState } from "react";

export function Product() {
  const { state } = useFilter();

  const filterFunction = () => {
    if (state.category.length > 1) {
      return state.category;
    } else {
      return state.product;
    }
  };

  const shortBy = filterFunction();

  FetchData();
  return (
    <div>
      <Navbar />
      <section className="main-box">
        <Filter />
        <main className="main-product">
          <div className="grid-three">
            {filterFunction().map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </main>
      </section>
    </div>
  );

  function newFunction() {
    return (Mens) => (Women) => (kids) => {
      if (Mens || Women || kids) {
        return state.category;
      } else {
        return state.product;
      }
    };
  }
}
