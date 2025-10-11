import { createContext } from "react";
import type Products from "../../types/Products";

const CarShopContext = createContext<Products[] | undefined>(undefined);
export default CarShopContext;
