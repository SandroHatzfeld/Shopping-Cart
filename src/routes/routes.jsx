import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import ErrorPage from './ErrorPage.jsx'

const routes = [
	{
		path: '/',
		element: <Home />,
		title: 'Willkommen bei Museqi',
		errorElement: <ErrorPage />,
	},
	{
		path: 'shop',
		title: 'Museqi – Shop',
		element: <Shop />,
	},
	{
		path: 'profile',
		title: 'Museqi – Profil',
		element: <ErrorPage />,
	},
	{
		path: 'cart',
		title: 'Museqi – Warenkorb',
		element: <Cart />,
	},
]

export default routes