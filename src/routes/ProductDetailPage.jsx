import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import AddToCart from "../components/shop/AddToCart.jsx"
import AmountInput from "../components/shop/AmountInput.jsx"
import UserInput from '../components/shop/UserInput.jsx'

export default function ProductDetailPage() {
  const loaderData = useLoaderData()
  const currentProductId = useParams()
  const [productData, setProductData] = useState(loaderData)

  // filter the loaded data once for the current item
  useEffect(() => {
    if (Object.keys(currentProductId).length === 0) {
      setProductData(loaderData)
      return
    }
    const filteredProducts = loaderData.filter(
      (item) => item.id === Number.parseInt(currentProductId.productDetail)
    )

    setProductData(filteredProducts[0])
  }, [currentProductId, loaderData])

  return (

      <main id="product-detail">
        <div className="detail-wrapper">
          <div className="detail-image-container">
            <div className="detail-image-slide">
              <img src={productData.image} alt="" />
              <img src={productData.image} alt="" />
              <img src={productData.image} alt="" />
            </div>
          </div>
          <div className="detail-content">
            <h1>{productData.title}</h1>
            <div className="flex-end">
              <div className="price-wrapper">
                <p>{productData.price}</p>
              </div>
              <UserInput itemId={productData.id}/>
            </div>
          </div>
        </div>
      </main>

  )
}
