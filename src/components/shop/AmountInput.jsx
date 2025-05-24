import { useState } from "react"
import AlertTooltip from "../AlertTooltip.jsx"

export default function AmountInput({ itemAmount, setItemAmount }) {
  const maxAmount = 99
  const [isValid, setIsValid] = useState(true)
  const [alertText, setAlertText] = useState("")

  const checkAmountIncrease = () => {
    const updatedAmount = itemAmount + 1
    checkValidity(updatedAmount)
  }

  const checkAmountDecrease = () => {
    const updatedAmount = itemAmount - 1
    checkValidity(updatedAmount)
  }

  const checkAmountUpdate = (input) => {
    checkValidity(parseInt(input))
  }

  const checkValidity = (value) => {
    setIsValid(true)
    setAlertText("")

    // allow empty field
    if (value === "") {
      setItemAmount(value)
      return
    }

    // check for amounts
    if (value > maxAmount) {
      setAlertText("Die Menge wurde auf 99 begrenzt")
      setIsValid(false)
      setItemAmount(99)
      return
    } else if (value < 1) {
      setAlertText("Sie können nicht kleiner 1 wählen")
      setIsValid(false)
      setItemAmount(1)
      return
    } else {
      setItemAmount(value)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.target.blur()
    }

    // only allow numbers and arrow-keys
    if (
      !e.key.match(/^[0-9]$/) &&
      e.key !== "Backspace" &&
      e.key !== "ArrowUp" &&
      e.key !== "ArrowDown" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      setAlertText("Bitte nur Zahlen eingeben")
      setIsValid(false)
      e.preventDefault()
    }
  }

  return (
    <div className="amount-wrapper">
      <AlertTooltip text={alertText} isHidden={isValid} />
      <button onClick={checkAmountDecrease}>-</button>
      <input
        onChange={(e) => checkAmountUpdate(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
        type="number"
        value={itemAmount}
        maxLength={3}
      />
      <button onClick={checkAmountIncrease}>+</button>
    </div>
  )
}
