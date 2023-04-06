import React from "react";
import { FC, useState, useEffect, useRef } from 'react'
import imgChevron from "../assets/img/chevron.svg"


const Collapse  = ({ title, content }) => {
    const [isCollapsed, setIsCollapsed] = useState(false)


    // useEffect(() => {
    //     if (useState === false) {
    //       contentRef.current.style.maxHeight = isCollapsed ? `${contentRef.current.scrollHeight}px` : '0px'
    //     }
    //   }, [isCollapsed])

    useEffect(() => {
        renderAnimations()
     }, [isCollapsed])

     let classNameChevron="collapse__button__arrow";
     
     const renderAnimations = () => {
        return isCollapsed ? (classNameChevron += 'arrow--active') : (classNameChevron -= 'arrow--active')
     }

return (
    <div className="collapse" aria-expanded={isCollapsed}>
      <button type="button" className="collapse__button" onClick={() => setIsCollapsed(!isCollapsed)}>
        {title}

        <img src={imgChevron} className={classNameChevron}></img>
      </button>
      <div className="collapse__content">
        <p>{content}</p>
        {/* {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{content}</p>
        )} */}
      </div>
    </div>
  );
};

export default Collapse;


/* 
*j'ai tenté
const Collapse  = ({ title, content }) => {
    const [isCollapsed, setIsCollapsed] = useState(false)


    // useEffect(() => {
    //     if (useState === false) {
    //       contentRef.current.style.maxHeight = isCollapsed ? `${contentRef.current.scrollHeight}px` : '0px'
    //     }
    //   }, [isCollapsed])

    useEffect(() => {
        renderAnimations()
     }, [isCollapsed])

     let classNameChevron="collapse__button__arrow";
     
     const renderAnimations = () => {
        return isCollapsed ? (classNameChevron += 'arrow--active') : (classNameChevron -= 'arrow--active')
     }

return (
    <div className="collapse" aria-expanded={isCollapsed}>
      <button type="button" className="collapse__button" onClick={() => setIsCollapsed(!isCollapsed)}>
        {title}

        <img src={imgChevron} className={classNameChevron}></img>
      </button>
      <div className="collapse__content">
        <p>{content}</p>

        </div>
        </div>
      );
    };
    */
