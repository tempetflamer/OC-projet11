import React from 'react'

import redStar from '../assets/img/red-star.svg'
import greyStar from '../assets/img/grey-star.svg'

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((star) =>
        parseInt(star) <= parseInt(rating) ? (
          <img key={star.toString()} className="rating__star" src={redStar} alt="redstar icon" />
        ) : (
          <img key={star.toString()} className="rating__star" src={greyStar} alt="greystar icon" />
        )
      )}
    </div>
  )
}

export default Rating
