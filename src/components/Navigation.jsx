import { Link } from "react-router-dom"
import LinkImage from './LinkImage.jsx'

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link to='/'><img /></Link>
        <Link to='/'>Startseite</Link>
        <Link to='/shop'>Shop</Link>
      </div>
			<div>
				<LinkImage icon='./assets/icons/profile.svg' alt='Zum Profil' link='profile' />
				<LinkImage icon='./assets/icons/cart.svg' alt='Zum Warenkorb' link='cart' />
			</div>
    </nav>
  )
}
