import type Category from "./Category";

type Products = {
  id:number;
  cantidad: number;
  totalPrice:number | string;
  title:string;
  price: string | number;
  description:string;
  categoryId:number;
  category: Category;
  images: string[];
  slug:string;
  creationAt:string;
  updatedAt:string;
}

export default Products