import Home from "./Home.jsx"
import Shop from "./Shop.jsx"
import Cart from "./Cart.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Root from "./Root.jsx"
import ProductListing from "./ProductListing.jsx"
import ProductDetailPage from "./ProductDetailPage.jsx"
import ListLayout from "./ListLayout.jsx"

const categoryLoader = async () => {
  try {
    return fetch("https://fakestoreapi.com/products/categories").then((res) =>
      res.json()
    )
  } catch (error) {
    console.log("An error occured: " + error)
  }
}
const productLoader = async () => {
  try {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json())
  } catch (error) {
    console.log("An error occured: " + error)
  }
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
        children: [
          {
            element: <ListLayout />,
            loader: categoryLoader,
            children: [
              {
                index: true,
                element: <ProductListing />,
                loader: productLoader,
              },
              {
                path: ":category",
                element: <ProductListing />,
                loader: productLoader,
              },
            ],
          },

          {
            path: "products/:productDetail",
            element: <ProductDetailPage />,
            loader: productLoader,
          },
        ],
      },
      { path: "profile", element: <ErrorPage /> },
      { path: "cart", element: <Cart />, loader: productLoader },
    ],
  },
]

export default routes
