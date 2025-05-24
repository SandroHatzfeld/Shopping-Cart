import AmountInput from "./AmountInput.jsx"
import AddToCart from "./AddToCart.jsx"
import { useContext, useState } from "react"
import { ShopContext } from "../../routes/Root.jsx"

export default function UserInput({ itemId }) {
  const { cartItems, setCartItems } = useContext(ShopContext)
  const [itemAmount, setItemAmount] = useState(1)

  const handleClick = () => {
    const findItem = cartItems.find((item) => item.id === itemId)

    if (findItem) {
      setCartItems((draft) => {
        const item = draft.find(item => item.id === findItem.id)
        item.amount += itemAmount
      })
    } else {
      setCartItems((draft) => {
        draft.push({ id: itemId, amount: itemAmount })
      })
    }
    setItemAmount(1)
  }
  return (
    <div className="user-input">
      <AmountInput
        itemAmount={itemAmount}
        setItemAmount={setItemAmount}
      />
      <AddToCart handleClick={handleClick} />
    </div>
  )
}
