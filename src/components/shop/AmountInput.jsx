export default function AmountInput() {
  return (
    <div className="amount-wrapper">
      <button>-</button>
      <input type="number" defaultValue={1} />
      <button>+</button>
    </div>
  )
}
