import Home from "./Home.jsx"
import Shop from "./Shop.jsx"
import Cart from "./Cart.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Root from "./Root.jsx"
import ProductListing from './ProductListing.jsx'

const categoryLoader = async () => {
  return fetch("https://fakestoreapi.com/products/categories").then((res) =>
    res.json()
  )
}
const productLoader = async () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json())
}

const routes = [
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        loader: categoryLoader,
        children: [
          { path: ":category", element: <ProductListing />, loader: productLoader },
        ],
      },
      { path: "profile", element: <ErrorPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]

export default routes
