import { useCallback, useContext, useEffect, useState } from "react"
import { ShopContext } from "./Root.jsx"
import { Form, useLoaderData } from "react-router-dom"

import LinkButton from "../components/LinkButton.jsx"
import AddToCart from "../components/shop/AddToCart.jsx"
import AmountInput from "../components/shop/AmountInput.jsx"
import priceRendering from "../utils/priceRendering.jsx"
import { freeShipping, shippingCost } from "../data/shippingCost.js"

export default function Cart() {
  const { cartItems, setCartItems } = useContext(ShopContext)
  const [cartItemData, setCartItemData] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [totalSum, setTotalSum] = useState(0)
  const [purchaseDone, setPurchaseDone] = useState(false)

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

    if (tempTotalCost > freeShipping) {
      setTotalSum(tempTotalCost)
    } else {
      setTotalSum(tempTotalCost + shippingCost)
    }
  }, [cartItemData])

  const handleSubmit = () => {
    setPurchaseDone(true)
    setCartItems([])
  }

  const handleSetItemAmount = useCallback((id, amount) => {
    setCartItems((draft) => {
      const item = draft.find((cartItem) => cartItem.id === id)

      console.log(amount);
      
      item.amount = amount
    })
  })

  const handleRemoveItem = useCallback((id) => {
    setCartItems((draft) => {
      const itemIndex = draft.findIndex((cartItem) => cartItem.id === id)

      draft.splice(itemIndex, 1)
    })
  })

  return (
    <main id="cart">
      <section>
        {cartItems.length == 0 && purchaseDone == false ? (
          <>
            <h2>Ihr Warenkorb ist leider leer</h2>
            <hr />
            <p>Entdecken Sie jetzt unsere große Produktauswahl!</p>
            <LinkButton link="/shop/" text="Jetzt durchstöbern" />
          </>
        ) : purchaseDone ? (
          <>
            <h2>Danke für Ihren Einkauf!</h2>
            <hr />
            <p>Kennen Sie schon unsere Neuheiten?</p>
            <LinkButton link="/shop/electronics" text="Jetzt entdecken" />
          </>
        ) : (
          <>
            <h2>Ihre gewählten Produkte</h2>
            <hr />
            <div className="cart-item-container">
              {cartItemData.map((item) => {
                return (
                  <div className="cart-item" key={item.productData.id}>
                    <img src={item.productData.image} alt="" />
                    <div className="cart-item-content">
                      <div className="cart-item-title-container">
                        <p className="cart-item-title">
                          {item.productData.title}
                        </p>
                        <button
                          onClick={() => handleRemoveItem(item.productData.id)}
                          className="cart-item-remove"
                        ></button>
                      </div>
                      <div className="cart-item-price">
                        <span>{priceRendering(item.productData.price)}</span>
                        <span>
                          <AmountInput
                            itemAmount={item.productAmount}
                            setItemAmount={(amount) =>
                              handleSetItemAmount(item.productData.id, amount)
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
          </>
        )}
      </section>
      {cartItems.length == 0 ? (
        <></>
      ) : (
        <aside>
          <Form>
            <h1>Warenkorb</h1>
            <div className="space-items">
              <span>Gesamtwarenwert</span>
              <span className="sum">{priceRendering(totalCost)}</span>
            </div>
            <div className="space-items">
              <span>Versandkosten</span>
              {totalCost > freeShipping ? (
                <span className="shipping">
                  <span className="free-shipping">
                    {priceRendering(shippingCost)}
                  </span>{" "}
                  {priceRendering(0)}
                </span>
              ) : (
                <span className="shipping">{priceRendering(shippingCost)}</span>
              )}
            </div>
            <hr />
            <div className="space-items">
              <span>Gesamteinkaufswert</span>
              <span className="total-sum">{priceRendering(totalSum)}</span>
            </div>
            <AddToCart
              handleClick={handleSubmit}
              buttonText="Jetzt bestellen"
            />
          </Form>
        </aside>
      )}
    </main>
  )
}
