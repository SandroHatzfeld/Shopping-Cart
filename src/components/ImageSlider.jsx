import { useState } from "react"
import { sliderItems } from "../data/sliderItems.js"
import LinkButton from "./LinkButton.jsx"

export default function ImageSlider() {
  const [sliderIndex, setSliderIndex] = useState(0)

  
  return (
    <section className="slider-wrapper">
      <div className="slider-content-container">
        <div
          className="slider-content-slide"
          style={{ translate: `${(sliderIndex % sliderItems.length) * -100}%` }}
        >
          {sliderItems.map((item) => {
            return (
              <div key={item.title} className="slider-content-item text-content">
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
          {sliderItems.map((item) => {
            return <img key={item.title} src={item.imageUrl} alt={item.linkText} />
          })}
        </div>
        <div className="slider-dots-container">
          {sliderItems.map((item, index) => {
            return (
              <button
                key={item.title}
                onClick={() => setSliderIndex(index)}
                className={sliderIndex === index ? "active" : ""}
              ></button>
            )
          })}
        </div>
        <div className="slider-buttons-container">
          <button onClick={() => setSliderIndex(sliderIndex ? sliderIndex - 1 :  sliderItems.length - 1 )}>«</button>
          <button onClick={() => setSliderIndex((sliderIndex + 1) % sliderItems.length )}>»</button>
        </div>
      </div>
    </section>
  )
}
