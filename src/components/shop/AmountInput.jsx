export default function AmountInput({
  handleAmountIncrease,
  handleAmountDecrease,
  handleAmountUpdate,
  itemAmount,
}) {
  const handleKeyPress = (e) => {   
    if(e.key === "Enter") {
      e.target.blur()
    }
  }

  return (
    <div className="amount-wrapper">
      <button onClick={handleAmountDecrease}>-</button>
      <input
        onChange={(e) => handleAmountUpdate(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
        type="number"
        value={itemAmount}
        maxLength={3}
      />
      <button onClick={handleAmountIncrease}>+</button>
    </div>
  )
}
