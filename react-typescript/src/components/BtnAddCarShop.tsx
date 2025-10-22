import { useEffect, useState } from "react";
import { useCarShopDispach } from "../hooks/useCarShopDispach";
import "../style/btnAddCardShop.css";
import type Products from "../types/Products";
import useCarShop from "../hooks/useCarShop";

type Props = {
  data: Products;
};

// TODO: Esto deberia de tener mejor forma

export const BtnAddCarShop = (props: Props) => {
  const [addCarShop, setAddCarShop] = useState(true);
  const carShop = useCarShop();
  const dispatch = useCarShopDispach();

  // TODO: Por que biome me marca esto como error. Nunca lo voy a entender.
  useEffect(() => {
    carShop.map((product) => {
      if (product.id === props.data.id) setAddCarShop(false);
    });
  }, []);

  const handleShowCarShop = () => {
    setAddCarShop(true);
  };
  const handleHideCarShop = () => {
    setAddCarShop(false);
  };

  // TODO: Ambos hale deberain provenir del provider

  const handleAddCarShop = () => {
    props.data.cantidad = 1;
    props.data.totalPrice = props.data.price;
    dispatch({
      type: "[CARSHOP] ADD",
      payload: props.data,
    });
  };
  const handleRemoveCarShop = () => {
    dispatch({
      type: "[CARSHOP] DELETE",
      payload: props.data.id,
    });
  };
  return (
    <>
      {addCarShop ? (
        <button
          className="btn btn-added"
          type="button"
          onClick={() => {
            handleAddCarShop();
            handleHideCarShop();
          }}
        >
          Agregar al carrito
        </button>
      ) : (
        <button
          className="btn btn-out"
          type="button"
          onClick={() => {
            handleRemoveCarShop();
            handleShowCarShop();
          }}
        >
          Sacar del carrito
        </button>
      )}
    </>
  );
};
