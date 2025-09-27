export const useCarShopDispach = () => {
  const carShopDispach = useContext(CarShopDispach);
  if (!carShopDispach) {
    throw new Error("El producto context debe de tener un provider");
  }
  return carShopDispach;
};
