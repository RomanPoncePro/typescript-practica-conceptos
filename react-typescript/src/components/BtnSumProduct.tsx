import { useCarShopDispach } from "../contexts/carshop/CarShopProvider";
import "../style/btnSumProduct.css";

type Props = {
  id: number;
  cant: number;
};

const BtnSumProduct = ({ id, cant }: Props) => {
  const dispatch = useCarShopDispach();

  const handleSumCarShop = () => {
    dispatch({
      type: "[CARSHOP] Sumar otro producto",
      payload: id,
    });
  };
  const handleRestCarShop = () => {
    dispatch({
      type: "[CARSHOP] Restar otro producto",
      payload: id,
    });
  };

  return (
    <div className="btn-container">
      <button className="btn-count" type="button" onClick={handleRestCarShop}>
        -
      </button>
      <p>{cant}</p>
      <button className="btn-count" type="button" onClick={handleSumCarShop}>
        +
      </button>
    </div>
  );
};

export default BtnSumProduct;
