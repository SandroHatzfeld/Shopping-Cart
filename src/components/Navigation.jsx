import { NavLink } from "react-router-dom"
import LinkImage from './LinkImage.jsx'

export default function Navigation() {
  return (
    <nav>
      <div>
        <LinkImage image='./assets/icons/logo_white.svg' alt='Museqi Logo' link='/' classes='logo'/>
        <NavLink className="text-effect" to='/'>Startseite</NavLink>
        <NavLink className="text-effect" to='/shop'>Shop</NavLink>
      </div>
			<div >
				<LinkImage image='./assets/icons/profile_white.svg' alt='Zum Profil' link='profile' classes='icon'/>
				<LinkImage image='./assets/icons/cart_white.svg' alt='Zum Warenkorb' link='cart' classes='icon'/>
			</div>
    </nav>
  )
}
