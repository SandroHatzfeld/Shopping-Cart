export default function AlertTooltip({ text = "", isHidden = true}) {
  return <div className={`alert-tooltip ${isHidden && 'isHidden'}`}>{text}</div>
}
