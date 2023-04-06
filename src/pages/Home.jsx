import React from "react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import CardHouse from "../components/CardHouse";
import DataHouses from "../assets/data/logements.json";
import imgBanner from "../assets/img/banner_home_desktop.png"




const Home = () => {
    return (
        <div className="home">
      <div className="home__banner">
      <Banner image={imgBanner} title="Chez vous, partout et ailleurs"/>
      </div>{" "}
        <section className="home__houses">
        <div className="home__houses__list">
            {DataHouses.map((house) => {
                return (
                    <article key={house.id}>
                        <Link to={`/hebergement/${house.id}`}>
                        <CardHouse image={house.cover} title={house.title} />
                        </Link>
                    </article>
                )

            })}
            </div>
        </section>
      </div>
    );
  };

  
  export default Home;



  /* const Home = () => {
      return (
          <Banner image={imgBanner} title="Chez vous, partout et ailleurs" />
          <section className="home__products">
  
          </section>
      );
    }; */