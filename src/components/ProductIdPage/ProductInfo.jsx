import { useState } from "react"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import ('../ProductIdPage/styles/ProductInfo.css')

const ProductInfo = ({ product }) => {

    const [quantity, setQuatity] = useState(1)

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuatity(quantity - 1)
        }
    }
    const handlePlus = () => setQuatity(quantity + 1)

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addProductToCartThunk(product.id, quantity))

    }

    return (
        <article className="info__product">
            <h3 className="info__title">{product?.brand}</h3>
            <h2>{product?.title}</h2>
            <p className="info__description" >{product?.description}</p>
            <footer>
                <span className="info__price">Price: $ </span>
                <span className="">{product?.price} </span>
                <div className="info__hadle">
                    <button className="handle__button"  onClick={handleMinus}>-</button>
                    <div>{quantity}</div>
                    <button className="handle__button" onClick={handlePlus}>+</button>
                </div>
                <button className="info__button" onClick={handleAddToCart}>Add to cart</button>
            </footer>
        </article>
    )
}

export default ProductInfo