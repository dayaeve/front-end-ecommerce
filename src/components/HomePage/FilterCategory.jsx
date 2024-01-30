import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ('../../pages/styles/FilterCategory.css')

const FilterCategory = ({setCategorySelected}) => {

 const [categories, getCategories] = useFetch()

 useEffect(() => {
    const url = 'https://back-end-ecommerce-l71f.onrender.com/categories'
    getCategories(url)
 }, [])

 //console.log(categories);

 const handleCategory = id => {
    setCategorySelected(id)

 }

  return (
    <section className="filter__section">
        <h3 className="filter__h3">Categories</h3>
        <hr className="filter__hr" />
            <ul className="filter__ul">
                <li className="filter__category" onClick={() => handleCategory('all')}>All categories</li>
                {
                    categories?.map(category => (
                        <li onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
    </section>
  )
}

export default FilterCategory