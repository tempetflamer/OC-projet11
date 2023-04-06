import React from "react";

const Banner = ({ image, title }) => {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      <div className="banner__filter"></div>
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};

export default Banner;