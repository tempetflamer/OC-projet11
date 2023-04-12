import React from 'react'
import { useState } from 'react'
import arrow from '../assets/img/chevron.svg'

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  return (
    <>
      <div className="slider">
        <div className="slider__content">
          {slides.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt=""
              className={index === currentSlide ? 'slider__content__img--active' : 'slider__content__img--inactive'}
            />
          ))}
        </div>
        {/* get control (button) if there are more than one picture */}
        <div className="slider__control">
          {length > 1 ? (
            <>
              <div className="slider__control__previous" onClick={prevSlide}>
                <img src={arrow} alt="" className="slider__control__previous-arrow" />
              </div>
              <div className="slider__control__preview">
                <p>
                  {currentSlide + 1}/{length}
                </p>
              </div>
              <div className="slider__control__next" onClick={nextSlide}>
                <img src={arrow} alt="" className="slider__control__next-arrow" />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Slider
