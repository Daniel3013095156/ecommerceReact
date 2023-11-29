import { useSelector } from "react-redux"
import { getProductsThunk } from "../store/slices/products.slice"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from 'react-redux'
import ProductCard from "../components/HomePage/ProductCard"
import FilterCategory from "../components/HomePage/FilterCategory"
import FilterPrice from "../components/HomePage/FilterPrice"

const HomePage = () => {
const [nameValue, setNameValue] = useState('')
const [categorySelect, setCategorySelect] = useState ('all')
const [priceRange, setPriceRange] = useState({
    from:0,
    to:Infinity
})

  const products = useSelector(store => store.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

const inputName = useRef ()

const handleInputName =() =>{
    setNameValue (inputName.current.value.toLowerCase().trim())
}


const callBackFilter = (prod) => {
// Filtrado por nombre
  const filterName = prod.title.toLowerCase().includes(nameValue)

// Filtrado por tipo
  const filterCategory = categorySelect === 'all'? true : categorySelect === prod.category.id;

//Filtrado por precio
  const price = +prod.price
  const filterPrice = priceRange.from <= price && price <=  priceRange.to
  return filterName && filterCategory && filterPrice
}


  return (
    <div>
        <input ref={inputName} onChange={handleInputName} type="" text=""/>
        <div>
          <h2>Filters</h2>
          <FilterPrice setPriceRange={setPriceRange}/>
          <FilterCategory setCategorySelect ={setCategorySelect} />
        </div>
      <div> 
        {
          products?.filter(callBackFilter).map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}
export default HomePage