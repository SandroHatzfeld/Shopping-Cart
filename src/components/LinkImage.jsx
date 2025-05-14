import { Link } from "react-router-dom"

export default function LinkImage({ icon = "✔", alt='', link = "/" }) {
  return <Link to={link}><img src={icon} alt={alt} /></Link>
}
