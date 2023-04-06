import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = ({ image, alt }) => {
  return (
    <div className="footer">
      <NavLink to="/">
        <img src={image} alt={alt} className="footer__logo" />
      </NavLink>
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
