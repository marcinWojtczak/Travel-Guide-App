import React from 'react'

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <h4 className='font-semibold'>{place.name}</h4>
    </div>
  )
}

export default PlaceDetails