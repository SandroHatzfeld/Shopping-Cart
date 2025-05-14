import { Link } from "react-router-dom"
import Icon from './Icon.jsx'

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link to='/'><img /></Link>
        <Link to='/'>Startseite</Link>
        <Link to='/shop'>Shop</Link>
      </div>
			<div>
				<Icon />
				<Icon />
			</div>
    </nav>
  )
}
