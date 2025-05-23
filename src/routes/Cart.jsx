import { useCallback, useContext, useEffect, useState } from "react"
import { ShopContext } from "./Root.jsx"
import { Form, useLoaderData } from "react-router-dom"
import { useImmer } from "use-immer"

import AddToCart from "../components/shop/AddToCart.jsx"
import AmountInput from "../components/shop/AmountInput.jsx"
import priceRendering from "../utils/priceRendering.jsx"
import { shippingCost } from "../data/shippingCost.js"

export default function Cart() {
  const { cartItems, setCartitems } = useContext(ShopContext)
  const [cartItemData, setCartItemData] = useImmer([])
  const [totalCost, setTotalCost] = useState(0)
  const loaderData = useLoaderData()

  useEffect(() => {
    const tempCartItemData = []
    cartItems.forEach((item) => {
      tempCartItemData.push({
        productData: loaderData.find((product) => product.id === item.id),
        productAmount: item.amount,
      })
    })

    setCartItemData(tempCartItemData)
  }, [cartItems])

  useEffect(() => {
    const tempTotalCost = cartItemData.reduce(
      (total, cur) => total + cur.productData.price * cur.productAmount,
      0
    )
    setTotalCost(tempTotalCost)
  }, [cartItemData])

  const handleSubmit = () => {}

  const handleAmountIncrease = useCallback((id) => {
    setCartItemData((draft) => {
      const item = draft.find((cartItem) => cartItem.productData.id === id)

      item.productAmount += 1
    })
  })

  const handleAmountDecrease = useCallback((id) => {
    setCartItemData((draft) => {
      const item = draft.find((cartItem) => cartItem.productData.id === id)

      // test if the field is empty and reset to 1
      if (item.productAmount === "") {
        item.productAmount = 1
      }

      if (item.productAmount <= 1) return

      item.productAmount -= 1
    })
  })

  const handleAmountUpdate = useCallback((id, amount) => {
    setCartItemData((draft) => {
      const item = draft.find((cartItem) => cartItem.productData.id === id)

      item.productAmount = amount
    })
  })

  const handleRemoveItem = useCallback((id) => {
    // setCartItemData((draft) => {
    //   const itemIndex = draft.findIndex((cartItem) => cartItem.productData.id === id)

    //   draft.splice(itemIndex, 1)
    // })
  })

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
                  <div className="cart-item-title-container">
                    <p className="cart-item-title">{item.productData.title}</p>
                     <button onClick={handleRemoveItem(item.productData.id)} className='cart-item-remove'></button>
                  </div>
                  <div className="cart-item-price">
                    <span>{priceRendering(item.productData.price)}</span>
                    <span>
                      <AmountInput
                        itemAmount={item.productAmount}
                        handleAmountIncrease={() =>
                          handleAmountIncrease(item.productData.id)
                        }
                        handleAmountDecrease={() =>
                          handleAmountDecrease(item.productData.id)
                        }
                        handleAmountUpdate={(amount) =>
                          handleAmountUpdate(item.productData.id, amount)
                        }
                      />
                    </span>
                    <span>
                      {item.productAmount === ""
                        ? priceRendering(item.productData.price)
                        : priceRendering(
                            item.productData.price * item.productAmount
                          )}
                    </span>
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
            <span className="sum">{priceRendering(totalCost)}</span>
          </div>
          <div className="space-items">
            <span>Versandkosten</span>
            <span className="shipping">{priceRendering(shippingCost)}</span>
          </div>
          <hr />
          <div className="space-items">
            <span>Gesamteinkaufswert</span>
            <span className="total-sum">
              {priceRendering(totalCost + shippingCost)}
            </span>
          </div>
          <AddToCart handleClick={handleSubmit} buttonText="Jetzt bestellen" />
        </Form>
      </aside>
    </main>
  )
}
