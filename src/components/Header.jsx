import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ image, alt }) => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={image} alt={alt} className="header__logo" />
      </NavLink>
      <nav className="header__menu">
        <NavLink to="/" className="header__menu__home">
          Accueil
        </NavLink>
        <NavLink to="/about" className="header__menu__about">
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
