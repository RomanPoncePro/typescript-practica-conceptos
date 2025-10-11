import { createContext } from "react";
import type FetchState from "../../types/FetchState";
import Products from "../../types/Products";

const initialState: FetchState<Products[]> = {
  data: null,
  isLoading: false,
  errors: null,
};

const ProductContext = createContext<FetchState<Products[]>>(initialState);

export default ProductContext;
