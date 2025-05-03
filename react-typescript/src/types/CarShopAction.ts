import type Products from "./Products"
 
type CarShopAction = {
  type: string, 
  payload: number | Products | Products[] 
}

export default CarShopAction