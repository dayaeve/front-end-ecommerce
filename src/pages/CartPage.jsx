import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/slices/cart.slice";
import CardProduct from "../components/CartPage.jsx/CardProduct";
import axios from "axios";
import getConfigToken from "../utils/getTokenConfig";
import('../pages/styles/CartPage.css')

const CartPage = () => {

   const cart = useSelector( store => store.cart )

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getCartThunk())
   }, [])

   //console.log(cart);
   
   const totalPriceCart = cart.reduce((acc,cv) => {
    const price = Number(cv.product.price)
    return acc + price * cv.quantity
   }, 0)


   const handlePurchase = () => {
    const url = 'https://back-end-ecommerce-l71f.onrender.com/purchases'
    axios.post(url,'', getConfigToken())
    .then(res => {
      console.log(res.data)
      dispatch(setCart([]))
    })
    .catch(err => console.log(err))
   }

  return (
    <div>
      <h1 className="cart__h1">Cart</h1>
      <div className="cart__div1">
        {
          cart.map(prod => (
            <CardProduct 
            key={prod.id}
            prod={prod}
            />
          ))
        }
      </div>
      <hr/>
      <footer className="cart__footer">
        <div className="cart__div">
        <span>Total: $</span>
        <span>{totalPriceCart}</span>
        </div>
        <button className="cart__button" onClick={handlePurchase}>Checkout</button>
      </footer>

    </div>
  )
}

export default CartPage