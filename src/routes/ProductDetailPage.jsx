import { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"

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
    <p>
      <br />
      <br />
      <br />
      {productData.title}
    </p>
  )
}
