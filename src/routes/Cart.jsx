import { useContext, useEffect, useState } from "react"
import { ShopContext } from "./Root.jsx"
import { Form, useLoaderData } from "react-router-dom"
import AddToCart from "../components/shop/AddToCart.jsx"
import AmountInput from '../components/shop/AmountInput.jsx'

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

  const handleSubmit = () => {}

  return (
    <main id="cart">
      <section>
        <h2>Ihre gewählten Produkte</h2>
        <hr />
        <div className="cart-item-container">
          {cartItemData.map((item) => {
            return (
              <div className="cart-item" key={item.productData.id}>
                <img src={item.productData.image} alt="" />
                <div className="cart-item-content">
                  <p className="cart-item-title">{item.productData.title}</p>
                  <div className='cart-item-price'>
                    <span>{item.productData.price} €</span>
                    <span><AmountInput itemAmount={item.productAmount} /></span>
                    <span>{item.productData.price * item.productAmount} €</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <aside>
        <Form>
          <h1>Warenkorb</h1>
          <div className="space-items">
            <span>Gesamtwarenwert</span>
            <span className="sum">{totalCost} €</span>
          </div>
          <div className="space-items">
            <span>Versandkosten</span>
            <span className="shipping">{shippingCost} €</span>
          </div>
          <hr />
          <div className="space-items">
            <span>Gesamteinkaufswert</span>
            <span className="total-sum">{totalCost + shippingCost} €</span>
          </div>
          <AddToCart handleClick={handleSubmit} buttonText="Jetzt bestellen" />
        </Form>
      </aside>
    </main>
  )
}
