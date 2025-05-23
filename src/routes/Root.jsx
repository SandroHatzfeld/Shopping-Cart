import { Outlet } from "react-router-dom"
import { createContext } from "react"
import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"
import { useImmer } from 'use-immer'

export const ShopContext = createContext()

export default function Root() {
  const [cartItems, setCartItems] = useImmer([])
  
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
