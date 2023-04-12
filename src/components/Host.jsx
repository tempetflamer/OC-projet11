import React from 'react'

const Host = ({ host }) => {
  const [firstname, lastname] = host.name.split(' ')

  return (
    <div className="host">
      <div className="host__text">
        <p className="host__firstname">{firstname}</p>
        <p className="host__lastname">{lastname}</p>
      </div>
      <img src={host.picture} alt="" className="host__picture" />
    </div>
  )
}

export default Host
