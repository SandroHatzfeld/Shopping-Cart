import Home from './Home.jsx'
import Shop from './Shop.jsx'
import ErrorPage from './ErrorPage.jsx'

const routes = [
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'shop',
		element: <Shop />,
	},
]

export default routes