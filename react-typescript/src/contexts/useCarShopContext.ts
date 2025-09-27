export const useCarShopContext = () => {
  const carShopContext = useContext(CarShopContext);

  if (!carShopContext) {
    throw new Error("El producto context debe de tener un provider");
  }
  return carShopContext;
};
