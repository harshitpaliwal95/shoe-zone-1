import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  CartProvider,
  FilterContextProvider,
  WishlistProvider,
} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <App />
          </Router>
        </WishlistProvider>
      </CartProvider>
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
