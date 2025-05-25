import { useState } from "react"

export default function AddToCart({
  handleClick,
  buttonText = "In den Warenkorb",
  confirmMessage,
}) {
  const [text, setText] = useState(buttonText)
  
  const clickHandler = () => {
    handleClick()

    setText(confirmMessage)

    setTimeout(() => {
      setText(buttonText)
    }, 2000)
  }
  return (
    <button className="add-to-cart link-button" onClick={clickHandler}>
      {text}
    </button>
  )
}
