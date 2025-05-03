import { Routes, Route } from "react-router-dom"
import { CardShopScreen } from '../routes/CardShopScreen'
import { ProductsScreen } from '../routes/ProductsScreen'
import { HomeScreen } from '../routes/HomeScreen'
import { NavBar } from "./NavBar"
import { ProductProvider } from "../contexts/ProductProvider"
import { CarShopProvider } from "../contexts/CarShopProvider"


export const App = () => {


  return (
    <>
    <CarShopProvider>
      <ProductProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
				    <Route path="/car" element={<CardShopScreen/>}/>
				    <Route path="/product" element={<ProductsScreen/>}/>		
		      </Routes>
      </ProductProvider>
    </CarShopProvider>
    </>

  )
}