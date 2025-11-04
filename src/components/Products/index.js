import Header from '../Header'
import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-sections">
      <PrimeDealsSection/>
      <AllProductsSection/>
    </div>
  </>
)

export default Products