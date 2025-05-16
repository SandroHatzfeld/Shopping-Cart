import { useLoaderData } from 'react-router-dom'

export default function ProductListing() {
	const productData = useLoaderData()

	
  return (
    <div className="listing-wrapper">
      <p className="breadcrumbs">Hier sollen Breadcrumbs stehen</p>
      <div className="listing-content">{productData.map((item) => {
				return <div className="product-item" key={item.id}>
					<img src={item.image} alt="" />
					<div className="product-item-content">
						<h2>{item.title}</h2>
						<p className="price">{item.price}</p>
						<div className="amount-wrapper"><button></button><input type="number" /><button></button></div>
						<button className="add-to-cart">In den Warenkorb</button>
					</div>
				</div>
			})}</div>
    </div>
  )
}
