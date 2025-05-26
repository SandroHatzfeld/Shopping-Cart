import { Outlet } from "react-router-dom"
import { createContext, useEffect } from "react"
import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"
import { useImmer } from 'use-immer'

export const ShopContext = createContext()

export default function Root() {
  const [cartItems, setCartItems] = useImmer([])

  useEffect(() => {
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const item = JSON.parse(localStorage.getItem(`cartItem-${i}`))
        setCartItems((draft) => {
          draft.push({id: item.id, amount: item.amount}) 
        })        
      }
    }
  }, [])

  useEffect(() => {
    localStorage.clear()

    // stop here if array is empty
    if(cartItems.length === 0) return

    cartItems.forEach((item, index) => {
      localStorage.setItem(`cartItem-${index}`, JSON.stringify({id: item.id, amount: item.amount}))
    })
  },[cartItems])
  

  return (
    <>
      <ShopContext.Provider value={{cartItems, setCartItems}}>
        <Navigation />
        <Outlet />
        <Footer />
      </ShopContext.Provider>
    </>
  )
}
