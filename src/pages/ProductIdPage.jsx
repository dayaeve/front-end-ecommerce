import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import SliderImgs from "../components/ProductIdPage/SliderImgs"

const ProductIdPage = () => {

  const { id } = useParams()

  //console.log(id);

  const[product , getProduct] = useFetch()

  useEffect(() => {
    const url = `https://back-end-ecommerce-l71f.onrender.com/products/${id}`;
    getProduct(url)
  }, [id])

 //console.log(product);

  return (
    <div>
      <SliderImgs product={product}/>
      <ProductInfo
      product={product} 
      />
      <SimilarProducts
      categoryId={product?.category.id}
      idProd= {product?.id}
      />
    </div>
  )
}

export default ProductIdPage