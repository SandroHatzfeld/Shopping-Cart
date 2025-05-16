import { useLoaderData } from "react-router-dom"

export default function ProductListing() {
  const productData = useLoaderData()

  return (
    <div className="listing-wrapper">
      <p className="breadcrumbs">Hier sollen Breadcrumbs stehen</p>
      <div className="listing-content">
        {productData.map((item) => {
          return (
            <div className="product-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="product-item-content">
                <p className="title">{item.title}</p>
                <div className='flex-bottom'>
                  <p className="price">{item.price}</p>
                  <div className="user-input">
                    <div className="amount-wrapper">
                      <button>-</button>
                      <input type="number" defaultValue={1}/>
                      <button>+</button>
                    </div>
                    <button className="add-to-cart link-button">In den Warenkorb</button>
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
