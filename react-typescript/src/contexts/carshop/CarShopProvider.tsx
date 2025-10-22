import CarShopContext from "./CarShopContext";
import { useReducer } from "react";
import carShopReducer from "../../reducers/carShopReducer";
import { CarShopDispach } from "../../hooks/useCarShopDispach";

type Props = {
  children: React.ReactNode;
};

export const CarShopProvider = (props: Props) => {
  const { children } = props;
  const [carShop, dispatch] = useReducer(carShopReducer, []); 

  return (
    <CarShopDispach.Provider value={{dispatch}}>
      <CarShopContext.Provider value={carShop}>
        {children}
      </CarShopContext.Provider>
    </CarShopDispach.Provider>
  );
};
export default CarShopProvider;
