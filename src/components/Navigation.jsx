import { NavLink } from "react-router-dom"
import LinkImage from './LinkImage.jsx'

export default function Navigation() {
  return (
    <nav>
      <div>
        <LinkImage icon='./assets/icons/logo_white.svg' alt='Museqi Logo' link='/'/>
        <NavLink to='/'>Startseite</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
      </div>
			<div>
				<LinkImage icon='./assets/icons/profile.svg' alt='Zum Profil' link='profile' />
				<LinkImage icon='./assets/icons/cart.svg' alt='Zum Warenkorb' link='cart' />
			</div>
    </nav>
  )
}
