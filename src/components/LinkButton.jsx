import { Link } from "react-router-dom"

export default function LinkButton({ text = "Jetzt entdecken", link = "/" }) {
  return <Link to={link}>{text}</Link>
}
