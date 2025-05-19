import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import ProductListItem from '../components/shop/ProductListItem.jsx'

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
        {productData.map((item, index) => {
          return (
            <ProductListItem key={index} item={item} />
          )
        })}
      </div>
    </div>
  )
}
