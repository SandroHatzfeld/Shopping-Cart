import UserInput from './UserInput.jsx'
import { Link } from 'react-router-dom'

export default function ProductListItem({item}) {
  return (
    <div className="product-item" key={item.id}>
      <Link
        to={`/shop/products/${item.id}`}
        className="product-item-image-link"
      >
        <img src={item.image} alt="" />
      </Link>
      <div className="product-item-content">
        <Link to={`/shop/products/${item.id}`}>
          <p className="title">{item.title}</p>
        </Link>
        <div className="flex-bottom">
          <p className="price">{item.price} €</p>
          <UserInput />
        </div>
      </div>
    </div>
  )
}
