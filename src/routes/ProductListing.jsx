import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import ProductListItem from "../components/shop/ProductListItem.jsx"

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

    const filteredProducts = loaderData.filter((product) =>
      product.categories.some(
        (category) => category === currentRoute.category
      )
    )
    
    setProductData(filteredProducts)
  }, [currentRoute, loaderData])

  return (
    <div className="listing-wrapper">
      <p className="breadcrumbs">Hier sollen Breadcrumbs stehen</p>
      <div className="listing-content">
        {productData.map((item) => {
          return <ProductListItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}
