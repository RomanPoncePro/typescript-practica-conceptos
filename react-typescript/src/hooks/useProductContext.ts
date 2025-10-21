import { useContext } from "react";

import ProductContext from "../contexts/product/ProductContext";

const useProductContext = () => {
  const productContext = useContext(ProductContext);
  if (!productContext) {
    throw new Error("El producto context debe de tener un provider");
  }
  return productContext;
};

export { useProductContext };
