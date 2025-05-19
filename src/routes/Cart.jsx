import { useContext, useEffect, useState } from "react"
import { ShopContext } from "./Root.jsx"
import { useLoaderData } from "react-router-dom"

export default function Cart() {
  const { cartItems, setCartitems } = useContext(ShopContext)
	const [cartItemData, setCartItemData] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const loaderData = useLoaderData()
  const shippingCost = 4.99

  useEffect(() => {
		const tempCartItemData = []
    cartItems.forEach((item) => {
      tempCartItemData.push({
        productData: loaderData.find((product) => product.id === item.id),
        productAmount: item.amount,
      })
    })

		setCartItemData(tempCartItemData)

    const tempTotalCost = tempCartItemData.reduce(
      (total, cur) => total + cur.productData.price * cur.productAmount,
      0
    )
    setTotalCost(tempTotalCost)
  
		
	}, [cartItems])
	
	
  return (
    <main id="cart">
      <section>
        <h2>Ihre gewählten Produkte</h2>
        <hr />
        <div className="cart-item-container">
          {cartItemData.map((item) => {
            return (
              <div className="cart-item">
                <img src={item.productData.image} alt="" />
                <div className="cart-item-content">
                  <p className="cart-item-title">{item.productData.title}</p>
                  <p className="cart-item-price">{item.productData.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <aside>
        <h1>Warenkorb</h1>
        <p className="sum">{totalCost} €</p>
        <p className="shipping">{shippingCost} €</p>
        <hr />
        <p className="total-sum">{totalCost + shippingCost} €</p>
      </aside>
    </main>
  )
}
