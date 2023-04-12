import React from 'react'
import { useState, useEffect, useRef } from 'react'
import imgChevron from '../assets/img/chevron.svg'

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  //const [classNameChevron, setClassNameChevron] = useState('collapse__button__arrow')

  /*   useEffect(() => {
    renderAnimations()
  }, [isCollapsed]) */

  //let classNameChevron = 'collapse__button__arrow'

  /*   const renderAnimations = () => {
    //return isCollapsed ? (classNameChevron += 'arrow--active') : (classNameChevron -= 'arrow--active')
    setClassNameChevron((state) => (isCollapsed ? (state += 'arrow--active') : (state -= 'arrow--active')))
  } */

  return (
    <div className="collapse" aria-expanded={isCollapsed}>
      <button type="button" className="collapse__button" onClick={() => setIsCollapsed(!isCollapsed)}>
        <p>{title}</p>

        <img src={imgChevron} alt="" className={`collapse__button__arrow ${isCollapsed ? '--active' : ''}`} />
      </button>
      <div className="collapse__content">
        {Array.isArray(content) ? (
          <ul className="collapse__content__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__content__list__list-equipment">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__content__text">{content}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse
