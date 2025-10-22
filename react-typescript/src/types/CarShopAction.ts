import type Products from "./Products";

type CarShopAction =
  | { type: "[CARSHOP] ADD"; payload: Products }
  | { type: "[CARSHOP] Sumar otro producto"; payload: number }
  | { type: "[CARSHOP] Restar otro producto"; payload: number }
  | { type: "[CARSHOP] DELETE"; payload: number };

export default CarShopAction;
