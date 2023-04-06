import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ image, alt }) => {
  return (
    <div className="header">
       <NavLink to="/">
      <img src={image} alt={alt} className="header__logo" />
      </NavLink>
      <nav className="header__menu">
        <NavLink to="/" className="header__menu__home">Accueil</NavLink>
        <NavLink to="/about" className="header__menu__about">À Propos</NavLink>

      </nav>
    </div>
  );
};

export default Header;


/*
const Header = ({ image, alt }) => {
  return (
    <div className="header">
      <img src={image} alt={alt} className="header__logo" />
      <nav className="header__menu">
        <a activeClassName='is-active' href="../pages/Home.jsx" className="header__menu__home">Accueil</a>
        <a activeClassName='is-active' href="../pages/About.jsx" className="header__menu__about">A Propos</a>

      </nav>
    </div>
  );
};

//
<NavLink to="/" activeClassName="isActiveLink" className="header__menu__home">Accueil</NavLink>
<NavLink to="../pages/About" activeClassName="isActiveLink" className="header__menu__about">Propos</NavLink>

*/