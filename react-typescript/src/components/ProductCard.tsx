import type { ReactNode } from "react";
import type Products from "../types/Products";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  data?: Products;
  title: string;
  price: string | number;
  image: string[];
  children?: ReactNode;
  onClick?: () => void;
};

export const ProductCard = ({ title, price, image, children }: Props) => {
  const mainImage = image?.[0] ?? "/placeholder.svg";

  return (
    <Card className="col-span-1 group cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={mainImage}
          alt={`Imagen de ${title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-lg font-semibold truncate">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-4 py-2">
        <p className="text-gray-800 font-medium text-base text-center">
          ${price.toLocaleString()}
        </p>
      </CardContent>

      {children && (
        <CardFooter className="px-4 pb-4 flex justify-end gap-2">
          {children}
        </CardFooter>
      )}
    </Card>
  );
};
