import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../components/Banner'
import CardAcc from '../components/CardAcc'
import DataAccs from '../assets/data/logements.json'
import imgBanner from '../assets/img/banner_home.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Banner image={imgBanner} title="Chez vous, partout et ailleurs" />
      </div>{' '}
      <section className="home__accs">
        <div className="home__accs__list">
          {DataAccs.map((acc) => {
            return (
              <article key={acc.id}>
                <Link to={`/accommodation/${acc.id}`}>
                  <CardAcc image={acc.cover} title={acc.title} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
