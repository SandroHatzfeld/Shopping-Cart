export default function IconButton({ icon, handleClick }) {
  return (
    <button onClick={handleClick} style={{ backgroundImage: icon }}></button>
  )
}
