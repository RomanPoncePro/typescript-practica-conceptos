import { useContext } from "react";
import CarShopContext from "../contexts/carshop/CarShopContext";

const useCarShop = () => {
  const context = useContext(CarShopContext);

  if (!context) {
    throw new Error("El producto context debe de tener un provider");
  }
  return context;
};

export default useCarShop;
