import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ProductProvider from "./contexts/product/ProductProvider";
import CarShopProvider from "./contexts/carshop/CarShopProvider";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ProductProvider>
        <CarShopProvider>
          <App />
        </CarShopProvider>
      </ProductProvider>
    </StrictMode>
  </BrowserRouter>
);
