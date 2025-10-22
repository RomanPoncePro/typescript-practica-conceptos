import { createContext, useContext } from "react";
import type { Dispatch } from "react";
import type Products from "../types/Products";

type CarShopAction = {
  type: string;
  payload: number | Products | Products[];
};

const CarShopDispach = createContext<Dispatch<CarShopAction> | null>(null);

const useCarShopDispach = () => {
  const carShopDispach = useContext(CarShopDispach);
  if (!carShopDispach) {
    throw new Error("El producto context debe de tener un provider");
  }
  return carShopDispach;
};

export { CarShopDispach, useCarShopDispach };
