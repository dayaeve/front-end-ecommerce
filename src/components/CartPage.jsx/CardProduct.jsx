import { useDispatch } from "react-redux"
import { deleteProductFromCartThunk } from "../../store/slices/cart.slice"
import('../HomePage/styles/CardProducts.css')

const CardProduct = ({ prod }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
       dispatch(deleteProductFromCartThunk(prod.id))
    }

  return (
    <section className="product__section1">
        <header className="product__header2" >
            <img className="product__img1" src={prod.product.images?.[0]?.url} alt=''/>
        </header>
        <article className="card__article">
            <h3 className="card__h3">{prod.product.title}</h3>
            <span className="card__quantity">Quantity  </span>
            <span className="prod__quantity">{prod.quantity}</span>
            
            <div className="card__price">
                <span>Price: </span>
                <span className="price__content">{prod.product.price}</span>
            </div>
            <div>
                <button className="button__card" onClick={handleDelete}>
                <i className='bx bx-trash' ></i>                
                </button>
            </div>
        </article>
        
    </section>
  )
}

export default CardProduct