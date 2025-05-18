import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"
import AmountInput from "../components/shop/AmountInput.jsx"
import AddToCart from '../components/shop/AddToCart.jsx'

export default function ProductListing() {
  const loaderData = useLoaderData()
  const currentRoute = useParams()
  const [productData, setProductData] = useState(loaderData)

  // filter the loaded data once for the selected category
  useEffect(() => {
    if (Object.keys(currentRoute).length === 0) {
      setProductData(loaderData)
      return
    }
    const filteredProducts = loaderData.filter(
      (item) => item.category === currentRoute.category
    )

    setProductData(filteredProducts)
  }, [currentRoute, loaderData])


  return (
    <div className="listing-wrapper">
      <p className="breadcrumbs">Hier sollen Breadcrumbs stehen</p>
      <div className="listing-content">
        {productData.map((item) => {
          return (
            <div className="product-item" key={item.id}>
              <Link to={`/shop/products/${item.id}`} className='product-item-image-link'>
                <img src={item.image} alt="" />
              </Link>
              <div className="product-item-content">
                <Link to={`/shop/products/${item.id}`}>
                  <p className="title">{item.title}</p>
                </Link>
                <div className="flex-bottom">
                  <p className="price">{item.price} €</p>
                  <div className="user-input">
                    <AmountInput />
                    <AddToCart />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
