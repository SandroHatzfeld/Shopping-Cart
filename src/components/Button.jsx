import { Link } from "react-router-dom"

export default function Button({ text = "Jetzt entdecken", link = "/" }) {
  return <Link to={link}>{text}</Link>
}
