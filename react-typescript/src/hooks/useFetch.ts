import { useState, useEffect } from "react"; 
import type FetchState from "../types/FetchState";
import type Products from "../types/Products";

export const useFetch = (url:string) => {

  const [ estado , setEstado ] = useState<FetchState<Products[]>>({
    data:null,
    isLoading:true,
    errors:null
  })
   
  const getFetch = async () => {
    if(!url) return
    try{
      const response = await fetch(url)
      const data = await response.json()
      setEstado({
        data,
        isLoading:false,
        errors:null
      })
    }catch(error){
      setEstado({
        data:null,
        isLoading:true,
        errors:error
      })
    }
  }

  useEffect(() => { 
    getFetch() 
  },[url])

  return estado

}

