import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
