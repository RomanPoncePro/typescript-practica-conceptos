import "../style/ProductCard.css";
import type React from "react";
import type Products from "../types/Products";

type Props = {
  children: React.ReactNode;
  data?: Products;
  title: string;
  price: string | number;
  image: string[];
};

export const ProductCard = ({ children, title, price, image }: Props) => {
  return (
    <article className="product-card">
      <section>
        <img
          src={image[0]}
          className="product-card__img"
          alt="Imagen del producto"
        />
      </section>
      <header>
        <h3 className="product-card__title">{title}</h3>
      </header>
      <footer>
        <div className="product-card__price">${price}</div>
        <div className="product-card__buttons">{children}</div>
      </footer>
    </article>
  );
};
