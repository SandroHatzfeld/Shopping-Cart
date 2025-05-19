import { Outlet } from "react-router-dom"
import { createContext, useState } from "react"
import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"

const ShopContext = createContext()

export default function Root() {
  const [cartItems, setCartItems] = useState([])


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
