import { createContext,useContext,useReducer } from 'react';
import { carShopReducer } from '../reducers/productReducer'
import type Products from '../types/Products';
import type { Dispatch } from 'react';
import type React from 'react'


type Props = {
  children?:React.ReactNode
}

type CarShopAction = {
  type: string, 
  payload: number | Products | Products[]
}

const CarShopContext = createContext<Products[]>([])
const CarShopDispach = createContext<Dispatch<CarShopAction> | null>(null)

export const useCarShopContext = () => {
  const carShopContext = useContext(CarShopContext)
  console.log(carShopContext)

  if(!carShopContext){
    throw new Error("El producto context debe de tener un provider");
  }
  return carShopContext
}

export const useCarShopDispach = () => {
  const carShopDispach = useContext(CarShopDispach)
  if(!carShopDispach){
    throw new Error("El producto context debe de tener un provider");
  }
  return carShopDispach
}

export const CarShopProvider = (props: Props) => {
  const { children } = props
  const [ carShop, dispatch ] = useReducer(carShopReducer,[]) // TODO: necesito saber porque biome me marca este error
  
  return (
    <CarShopDispach.Provider value={dispatch}>
      <CarShopContext.Provider value={carShop}>
        {children}
      </CarShopContext.Provider>
    </CarShopDispach.Provider>
    
  )
}