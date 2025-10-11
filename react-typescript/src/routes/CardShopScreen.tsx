import useCarShop from "../contexts/useCarShop";
import { ProductCard } from "../components/ProductCard";
import BtnRemoveCarShop from "../components/BtnRemoveCarShop";
import BtnSumProduct from "../components/BtnSumProduct";
import type Products from "../types/Products";

import "../style/layout.css";

const CardShopScreen = () => {
  const carShop = useCarShop();

  return (
    <>
      <main className="layout">
        {
          // Filtro el primer elemento porque es el valor incial de useState
          carShop ? (
            carShop.map((product: Products) => (
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
            (priceTotal: number, priceCurrent: Products) =>
              priceTotal + Number(priceCurrent.totalPrice),
            0
          )}
        </p>
      </main>
    </>
  );
};
export default CardShopScreen;
