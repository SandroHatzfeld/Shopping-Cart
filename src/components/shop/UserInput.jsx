import AmountInput from "./AmountInput.jsx"
import AddToCart from "./AddToCart.jsx"
import { useContext, useState } from 'react'
import { ShopContext } from '../../routes/Root.jsx'

export default function UserInput() {
  const { cartItems, setCartItems } = useContext(ShopContext)
	const [itemAmount, setItemAmount] = useState(1)

  const handleAmountIncrease = () => {
		setItemAmount(itemAmount + 1)
	}
  const handleAmountDecrease = () => {
		if(itemAmount <= 1) return
		setItemAmount(itemAmount - 1)
	}
  const handleAmountUpdate = (input) => {
		setItemAmount(input)
	}
	
  return (
    <div className="user-input">
      <AmountInput
        handleAmountDecrease={handleAmountDecrease}
        handleAmountIncrease={handleAmountIncrease}
        handleAmountUpdate={handleAmountUpdate}
				itemAmount={itemAmount}
      />
      <AddToCart />
    </div>
  )
}
