import { Outlet } from "react-router-dom"
import { createContext, useState } from "react"
import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"

export const ShopContext = createContext()

export default function Root() {
  const [cartItems, setCartItems] = useState([])

  console.log(cartItems);
  
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
