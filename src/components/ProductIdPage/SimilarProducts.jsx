import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import ProductCard from "../HomePage/ProductCard"
import('../ProductIdPage/styles/SimilarProducts.css')

const SimilarProducts = ({ categoryId, idProd }) => {

    const [productsByCategory, getProductsByCategory] = useFetch()

    useEffect(() => {
        if (categoryId) {
            const url = `https://back-end-ecommerce-l71f.onrender.com/products?categoryId=${categoryId}`
            getProductsByCategory(url)
        }
    }, [categoryId])

    //console.log(productsByCategory);


    return (
        <article className="similar__product">
            <h2 className="similar__text">Similar Products</h2>
            <div className="product-container">
                {
                    productsByCategory?.filter(prod => prod.id !== idProd).map(product =>(
                        <ProductCard
                        key= {product.id}
                        product = {product}
                        />

                    ))
                }
            </div>
        </article>
    )
}

export default SimilarProducts