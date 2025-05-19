export default function AmountInput({
  handleAmountIncrease,
  handleAmountDecrease,
  handleAmountUpdate,
  itemAmount,
}) {
  return (
    <div className="amount-wrapper">
      <button onClick={handleAmountDecrease}>-</button>
      <input
        onChange={(e) => handleAmountUpdate(e.target.value)}
        type="number"
        value={itemAmount}
        maxLength={3}
      />
      <button onClick={handleAmountIncrease}>+</button>
    </div>
  )
}
