import { createContext, useContext } from "react";
import type Products from "../types/Products";
import type FetchState from "../types/FetchState";

const initialState: FetchState<Products[]> = {
  data: null,
  isLoading: false,
  errors: null,
};

const ProductContext = createContext<FetchState<Products[]>>(initialState);

const useProductContext = () => {
  const productContext = useContext(ProductContext);
  if (!productContext) {
    throw new Error("El producto context debe de tener un provider");
  }
  return productContext;
};

export { useProductContext, ProductContext};
