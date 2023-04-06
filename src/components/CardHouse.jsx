import React from "react";

const CardHouse = ({ image, title }) => {
    return (
      <div className="card">
        <img src={image} alt="" className="card__img" />
        <div className="card__filter"></div>
        <h2 className="card__title">{title}</h2>
      </div>
    );
  };

  export default CardHouse;