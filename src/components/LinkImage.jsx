import { Link } from "react-router-dom"

export default function LinkImage({
  image = "",
  alt = "",
  link = "/",
  classes = "",
  itemCount = null,
}) {

  
  return (
    <div className={classes}>
      <Link to={link} >
        <img src={image} alt={alt} />
      </Link>
      {itemCount && <div className='item-count'><span>{itemCount > 9 ? '9+': itemCount}</span></div>}
    </div>
  )
}
