import { NavLink } from "react-router-dom"
import LinkImage from './LinkImage.jsx'
import { ShopContext } from '../routes/Root.jsx'
import { useContext } from 'react'

export default function Navigation() {
  const {cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems.reduce((total, cur) => total + cur.amount, 0)
  
  return (
    <nav>
      <div>
        <LinkImage image='./assets/icons/logo_white.svg' alt='Museqi Logo' link='/' classes='logo'/>
        <NavLink className="text-effect" to='/'>Startseite</NavLink>
        <NavLink className="text-effect" to='/shop'>Shop</NavLink>
      </div>
			<div >
				<LinkImage image='./assets/icons/profile_white.svg' alt='Zum Profil' link='/' classes='icon'/>
				<LinkImage image='./assets/icons/cart_white.svg' alt='Zum Warenkorb' link='cart' classes='icon cart' itemCount={cartItemAmount} />
			</div>
    </nav>
  )
}
