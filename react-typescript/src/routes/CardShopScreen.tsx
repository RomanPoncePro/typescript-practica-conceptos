import { useCarShopContext } from "../contexts/CarShopProvider";
import { ProductCard } from "../components/ProductCard";
import BtnRemoveCarShop from "../components/BtnRemoveCarShop";
import BtnSumProduct from "../components/BtnSumProduct";
import "../style/layout.css";

const CardShopScreen = () => {
  const carShop = useCarShopContext();

  return (
    <>
      <main className="layout">
        {
          // Filtro el primer elemento porque es el valor incial de useState
          carShop ? (
            carShop.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.totalPrice}
                image={product.images}
              >
                <BtnSumProduct id={product.id} cant={product.cantidad} />
                <BtnRemoveCarShop id={product.id} />
              </ProductCard>
            ))
          ) : (
            <p>Carga tus productos!!!!</p>
          )
        }
        <p>
          Total: $
          {carShop.reduce(
            (priceTotal, priceCurrent) =>
              priceTotal + Number(priceCurrent.totalPrice ?? 0),
            0
          )}
        </p>
      </main>
    </>
  );
};
export default CardShopScreen;
