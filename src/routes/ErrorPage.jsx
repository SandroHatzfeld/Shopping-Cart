import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <>
      <main id='errorPage'>
        <h1>Oops, es ist ein Fehler passiert.</h1>
        <Link to="/">Zurück zur Startseite</Link>
      </main>
    </>
  )
}
