import { useState } from 'react'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters.jsx'


function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products) 

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
    )
}

export default App
