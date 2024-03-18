import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from './components/Header.jsx'

function App() {
  const [products] = useState(initialProducts)
  const [filter, setFilters] = useState({
    category: 'all',
    minPrice: 20
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice && 
        (
          filter.category === 'all' || 
          filter.category === product.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products) 

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
    )
}

export default App
