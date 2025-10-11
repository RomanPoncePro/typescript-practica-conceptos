import type Products from "../types/Products";
import type CarShopAction from "../types/CarShopAction";

export const carShopReducer = (
  state: Products[] | Products,
  action: CarShopAction
) => {
  switch (action.type) {
    case "[CARSHOP] ADD":
      return [...state, action.payload];
    case "[CARSHOP] Sumar otro producto":
      return state.map((product: Products) => {
        const cant: number = product.cantidad + 1;
        if (product.id === action.payload)
          return {
            ...product,
            totalPrice: cant * (product.price as number),
            cantidad: cant,
          };
        return product;
      });
    case "[CARSHOP] Restar otro producto":
      return state.map((product: Products) => {
        const cant: number = product.cantidad - 1;
        if (cant < 1) return product;
        if (product.id === action.payload)
          return {
            ...product,
            totalPrice: cant * (product.price as number),
            cantidad: cant,
          };
        return product;
      });

    case "[CARSHOP] DELETE":
      return state.filter((product: Products) => product.id !== action.payload);
  }
};
export default carShopReducer;
