import { Link } from "react-router-dom"

export default function LinkImage({ image = "", alt='', link = "/", classes = ""}) {
  return <Link to={link} className={classes}><img src={image} alt={alt} /></Link>
}
