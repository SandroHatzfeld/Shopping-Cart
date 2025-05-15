import { Link } from "react-router-dom"
import Navigation from "../components/Navigation.jsx"
import Footer from "../components/Footer.jsx"

export default function ErrorPage() {
  return (
    <>
      <Navigation />
      <main>
        <h1>Oops, es ist ein Fehler passiert.</h1>
        <Link to="/">Zurück zur Startseite</Link>
      </main>
      <Footer />
    </>
  )
}
