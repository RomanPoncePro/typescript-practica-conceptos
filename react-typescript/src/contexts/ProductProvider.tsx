import type React from "react";
import { useFetch } from "../hooks/useFetch";
import { ProductContext } from "./useProductContext";

type Props = {
  children?: React.ReactNode;
};

const ProductProvider = ({ children }: Props) => {
  const response = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <ProductContext.Provider value={response}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
