import('../../pages/styles/PurchaseCard.css')


const PurchaseCard = ({ purchase }) => {
  return (
    <article className='purchase__card'>
        <header className='purchase__header'>
            <img className='purchase__img' src={purchase.product.images?.[0]?.url} alt="" />
        </header>
        <h3 className='purchase__title'>{purchase.product.title}</h3>
        <span className="purchase__quantity">Quantity  </span>
        <span className='quantity'>{purchase.quantity}</span>
        <div className='price'><span className='span__price'>Price </span>{purchase.product.price}</div>
    </article>
  )
}

export default PurchaseCard