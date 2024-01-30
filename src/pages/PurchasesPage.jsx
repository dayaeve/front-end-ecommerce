import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import getConfigToken from "../utils/getTokenConfig"
import PurchaseCard from "../components/PurchasesPage/PurchaseCard"
import('../pages/styles/PurchaseCard.css')

const PurchasesPage = () => {

   const [ purchases, getPurchases] = useFetch()

   useEffect(() => {
    const url = 'https://back-end-ecommerce-l71f.onrender.com/purchases'
    getPurchases(url, getConfigToken())
   }, [])

   console.log(purchases);

  return (
    <div className="purchase__div">
      
        <div className="purchase__div" >
            {
                purchases?.map(inforPurchase => (
                    <PurchaseCard
                    key={inforPurchase.id}
                    purchase={inforPurchase}
                    />
                ))
            }

        </div>
    </div>
  )
}

export default PurchasesPage