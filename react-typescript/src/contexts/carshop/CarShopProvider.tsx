import { useReducer, createContext } from "react";
import { CarShopDispach } from "../useCarShopDispach";
import carShopReducer from "../../reducers/carShopReducer";
import type Products from "../../types/Products";

type Props = {
  children?: React.ReactNode;
};

const CarShopContext = createContext<Products[] | Products>([]);

export const CarShopProvider = (props: Props) => {
  const { children } = props;
  const [carShop, dispatch] = useReducer(carShopReducer, []); // TODO: necesito saber porque biome me marca este error

  return (
    <CarShopDispach.Provider value={dispatch}>
      <CarShopContext.Provider value={carShop}>
        {children}
      </CarShopContext.Provider>
    </CarShopDispach.Provider>
  );
};
