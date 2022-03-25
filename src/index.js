import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterContextProvider } from "./context/filterContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
      <Router>
        <App />
      </Router>
    </FilterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
