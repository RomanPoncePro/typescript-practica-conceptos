import { ProductCard } from "../../components/ProductCard";
import { useProductContext } from "../../hooks/useProductContext";
import { BtnAddCarShop } from "../../components/BtnAddCarShop";
import logo from "../../assets/Loading_icon.gif";

// TODO: Manejar lo errores en la pantalla

const ProductPage = () => {
  const { data, isLoading, errors } = useProductContext(); // Todo me falta manejar errores en pantalla
  return (
    <>
      <main className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <div>
            <img src={logo} alt="gift de carga" />
          </div>
        ) : errors ? (
          <p>{errors.message}</p>
        ) : (
          data?.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.images}
            >
              <BtnAddCarShop data={product} />
            </ProductCard>
          ))
        )}
      </main>
    </>
  );
};

export default ProductPage;
