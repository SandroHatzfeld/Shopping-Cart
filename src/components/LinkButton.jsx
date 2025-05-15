import { Link } from "react-router-dom"

export default function LinkButton({ text = "Jetzt entdecken", link = "/", classes = 'link-button'}) {
  return <Link className={classes} to={link}>{text}</Link>
}
