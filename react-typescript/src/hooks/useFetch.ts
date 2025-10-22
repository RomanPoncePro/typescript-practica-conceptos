import { useState, useEffect } from "react";
import FetchState from "../types/FetchState";


export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    errors: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      if (!url) return;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        const data = await response.json();
        setData({
          data,
          isLoading: false,
          errors: null,
        });
      } catch (error) {
        if (error instanceof Error)
          setData({
            data: null,
            isLoading: false,
            errors: error,
          });
        else {
          throw new Error(`Error desconocido: ${error}`);
        }
      }
    };

    getFetch();
  }, [url]);

  return data;
};
