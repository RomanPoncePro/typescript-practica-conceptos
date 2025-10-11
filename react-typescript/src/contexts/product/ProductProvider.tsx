import type React from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductContext from "./ProductContext";
import Products from "../../types/Products";

type Props = {
  children?: React.ReactNode;
};

const ProductProvider = ({ children }: Props) => {
  const response = useFetch<Products[]>(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <ProductContext.Provider value={response}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
