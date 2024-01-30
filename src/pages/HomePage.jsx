import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from "../store/slices/products.slice";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../components/HomePage/ProductCard";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import './styles/HomePage.css'


const HomePage = () => {
  
  const [nameValue, setNameValue] = useState('')
  const [categorySelected, setCategorySelected] = useState('all')
  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: Infinity
  })
  const products = useSelector(store => store.products)

 

  //console.log(products);

  const dispatch = useDispatch()

  useEffect (() => {
    dispatch (getProductsThunk())
  },[])

  const inputName  = useRef()

  const handleInputName = () => {
    //console.log('Me ejecute');
    setNameValue(inputName.current.value.toLowerCase().trim())
  }
    //console.log(nameValue);

    const callBackFilter = prod => {
      //Filtrado por nombre
      const filterName = prod.title.toLowerCase().includes(nameValue)
      //Filtrado por categoria
      const filterCategory = categorySelected === 'all' ? true : categorySelected === prod.category?.id
      //Filtrado por precio
      const price = +prod.price
      const filterPrice = priceRange.from <= price && price <= priceRange.to
      return filterName && filterCategory && filterPrice

    }
    ///console.log(products);
    // console.log(categorySelected);
   // console.log(priceRange);

  return (
    <div className="home__di">

      <div className="home__div">
        <h2 className="home__price">Price</h2>
        <br/>
        <FilterPrice 
        setPriceRange={setPriceRange}
        />
        <FilterCategory
        setCategorySelected = {setCategorySelected}
        />
      </div>
      <div className="home__search">
      <input className="home__input" Search ref={inputName} onChange={handleInputName} placeholder= "Search" type="text"/>
     
      <div className="product__container">
        {
          products?.filter(callBackFilter).map(prod => (
            <ProductCard
            key={prod.id}
            product={prod}
            />
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default HomePage