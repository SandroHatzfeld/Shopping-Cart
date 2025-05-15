import Home from "./Home.jsx"
import Shop from "./Shop.jsx"
import Cart from "./Cart.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Root from "./Root.jsx"

const routes = [
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "profile", element: <ErrorPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },

  
]

export default routes
