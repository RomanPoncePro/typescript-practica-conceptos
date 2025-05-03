import { useFetch } from "../hooks/useFetch";
import { createContext, useContext } from "react";
import type React from "react";
import type Products from "../types/Products";
import type FetchState from "../types/FetchState";

type Props = {
	children?: React.ReactNode;
};

const initialState: FetchState<Products[]> = {
	data: null,
	isLoading: false,
	errors: null,
};

const ProductContext = createContext<FetchState<Products[]>>(initialState);

export const useProductContext = () => {
	const productContext = useContext(ProductContext);
	if (!productContext) {
		throw new Error("El producto context debe de tener un provider");
	}
	return productContext;
};

export const ProductProvider = (props: Props) => {
	// response = data,loading,errors
	const response = useFetch("https://api.escuelajs.co/api/v1/products");

	return (
		<ProductContext.Provider value={response}>
			{props.children}
		</ProductContext.Provider>
	);
};
