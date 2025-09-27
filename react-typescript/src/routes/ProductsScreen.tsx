import { ProductCard } from "../components/ProductCard";
import { useProductContext } from "../contexts/useProductContext";
import { BtnAddCarShop } from "../components/BtnAddCarShop";
import Filter from "../components/Filter";
import logo from "../assets/Loading_icon.gif";
import "../style/layout.css";

// TODO: Manejar lo errores en la pantalla

const ProductScreen = () => {
  const { data, isLoading, errors } = useProductContext(); // Todo me falta manejar errores en pantalla
  return (
    <>
      <main className="layout">
        {isLoading ? (
          <div>
            <img src={logo} alt="gift de carga" />
          </div>
        ) : errors ? (
          <p>{errors.message}</p>
        ) : (
          <div>
            <Filter />
            {data?.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.images}
              >
                <BtnAddCarShop data={product} />
              </ProductCard>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default ProductScreen;
