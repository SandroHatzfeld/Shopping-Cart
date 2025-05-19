export default function AddToCart({ handleClick, buttonText = "In den Warenkorb"}) {
  return (
    <button className="add-to-cart link-button" onClick={handleClick}>
      {buttonText}
    </button>
  )
}
