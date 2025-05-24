import { useState, useEffect, useRef } from "react"
import AlertTooltip from "../AlertTooltip.jsx"

export default function AmountInput({ itemAmount, setItemAmount }) {
  const maxAmount = 99
  const [isValid, setIsValid] = useState(true)
  const [alertText, setAlertText] = useState("")

  const checkAmountIncrease = () => {
    checkValidity(itemAmount)
    setItemAmount(itemAmount + 1)
  }

  const checkAmountDecrease = () => {
    checkValidity(itemAmount)
    setItemAmount(itemAmount - 1)
  }

  const checkAmountUpdate = (input) => {
    checkValidity(input)
    setItemAmount(input)
  }

  const checkValidity = (value) => {
    setIsValid(true)
    setAlertText("")

    // allow empty field
    if (value === "") {
      setItemAmount(value)
      return
    }

    // only allow numbers
    if (!value.toString().match(/^[0-9]+$/)) {
      setAlertText("Bitte nur Zahlen eingeben")
      setIsValid(false)
    }

    // check for amounts
    if (parseInt(value) >= maxAmount) {
      setAlertText("Die Menge wird auf 99 begrenzt")
      setItemAmount(99)
      setIsValid(false)
      return
    } else if (parseInt(value) <= 1) {
      setAlertText("Sie können nicht weniger als 1 eingeben")
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
  }

  return (
    <div className="amount-wrapper">
      <button onClick={checkAmountDecrease}>-</button>
      <div className="amount-input-container">
        <input
          onChange={(e) => checkAmountUpdate(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
          type="number"
          value={itemAmount}
          maxLength={3}
        />
        <AlertTooltip text={alertText} isHidden={isValid} />
      </div>
      <button onClick={checkAmountIncrease}>+</button>
    </div>
  )
}
