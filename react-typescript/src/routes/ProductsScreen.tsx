import { ProductCard } from '../components/ProductCard'
import { useProductContext } from '../contexts/ProductProvider'
import { BtnAddCarShop } from '../components/BtnAddCarShop'
import logo from '../assets/Loading_icon.gif'  
import '../style/layout.css'


export const ProductsScreen = () => {

  const {data, isLoading, errors } = useProductContext() // Todo me falta manejar errores en pantalla

	return (
    <>
    <main className='layout'>
      { isLoading ? 
        <div><img src={logo} alt="gift de carga" /></div>
        :
        // Me aseguro de que data no sea null.
        data?.map((product)=> <ProductCard key={product.id} title={product.title} price={product.price} image={product.images}>
          <BtnAddCarShop data={product}/>
        </ProductCard> )
      }
    </main>
    </>
  )
}