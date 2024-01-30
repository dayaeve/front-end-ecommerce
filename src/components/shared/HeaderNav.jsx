import { Link } from "react-router-dom"
import ('../../pages/styles/HeaderNav.css')

const HeaderNav = () => {
  return (
    <header className="header">
       <ul className="header__ul">
        <h1 className="header__h1"><Link className="header__link" to= '/'>e-commerce</Link></h1>
           
                <li className="header__li"><Link  className="header__link1" to='/register'><i className='bx bx-user'></i></Link></li>
                <li className="header__li"><Link className="header__link1" to= '/login'><i className='bx bx-box' ></i></Link></li>
                <li className="header__li"><Link  className="header__link1"to= 'cart'><i className='bx bx-cart'></i></Link></li>
                <li className="header__li"><Link className="header__link1" to= '/purchases'><i className='bx bx-purchase-tag' ></i></Link></li>
            </ul>
        
    </header>
  )
}

export default HeaderNav