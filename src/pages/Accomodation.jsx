import { useParams, Navigate } from 'react-router-dom'

import DataHouses from '../assets/data/logements.json'
import Collapse from '../components/Collapse'
import Gallery from '../components/Gallery'
import Tag from '../components/Tag'
import Host from '../components/Host'
import Rating from '../components/Rating'
import Layout from '../components/Layout'

function Accomodation() {
  const { dataID } = useParams()
  const house = DataHouses.find((item) => item.id === dataID)

  return (
    <>
      {house === undefined ? (
        <Navigate to="not-found" replace={true} />
      ) : (
        <Layout className="accommodation">
          <Gallery slides={house.pictures} />
          <div className="accommodation__content">
            <div className="accommodation__content__informations">
              <h1 className="accommodation__content__informations__title">{house.title}</h1>
              <p className="accommodation__content__informations__location">{house.location}</p>
              <div className="accommodation__content__informations__tags">
                {house.tags.map((tag, index) => (
                  <Tag key={index} hasTag={tag} />
                ))}
              </div>
            </div>
            <div className="accommodation__content__rating">
              <Host host={house.host} />
              <Rating rating={house.rating} />
            </div>
          </div>
          <div className="accommodation__dropdowns">
            <Collapse title="Description" content={house.description} />
            <Collapse title="Équipement" content={house.equipments} />
          </div>
        </Layout>
      )}
    </>
  )
}

export default Accomodation
