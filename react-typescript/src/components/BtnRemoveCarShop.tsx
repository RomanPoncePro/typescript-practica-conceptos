import { useCarShopDispach } from "../contexts/carshop/CarShopProvider";
import "../style/btnAddCardShop.css";

type Props = {
  id: number;
};

const BtnRemoveCarShop = (props: Props) => {
  const { id } = props;
  const dispatch = useCarShopDispach();

  const handleDeleteProduct = () => {
    console.log(id);
    dispatch({
      type: "[CARSHOP] DELETE",
      payload: id,
    });
  };

  return (
    <button type="button" onClick={handleDeleteProduct} className="btn btn-out">
      remove
    </button>
  );
};

export default BtnRemoveCarShop;
