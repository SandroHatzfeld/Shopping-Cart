import { useState } from "react"
import { sliderItems } from "../data/sliderItems.js"
import LinkButton from "./LinkButton.jsx"

export default function ImageSlider() {
  const [sliderIndex, setSliderIndex] = useState(0)


  const prevItem = () => {
    setSliderIndex(sliderIndex - 1)
  }
  return (
    <section className="slider-wrapper">
      <div className="slider-content-container">
        <div
          className="slider-content-slide"
          style={{ translate: `${(sliderIndex % sliderItems.length) * -100}%` }}
        >
          {sliderItems.map((item, index) => {
            return (
              <div key={index} className="slider-content-item">
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <LinkButton link={item.link} text={item.linkText}></LinkButton>
              </div>
            )
          })}
        </div>
      </div>
      <div className="slider-image-container">
        <div
          className="slider-image-slide"
          style={{ translate: `${(sliderIndex % sliderItems.length) * -100}%` }}
        >
          {sliderItems.map((item, index) => {
            return <img key={index} src={item.imageUrl} alt={item.linkText} />
          })}
        </div>
        <div className="slider-dots-container">
          {sliderItems.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setSliderIndex(index)}
                className={sliderIndex % sliderItems.length === index ? "active" : ""}
              ></button>
            )
          })}
        </div>
        <div className="slider-buttons-container">
          <button onClick={() => setSliderIndex(sliderIndex ? sliderIndex - 1 :  sliderItems.length - 1 )}>-</button>
          <button onClick={() => setSliderIndex((sliderIndex + 1) )}>+</button>
        </div>
      </div>
    </section>
  )
}
