import React from 'react';
import { BsFillTelephoneFill, BsGlobe } from "react-icons/bs";


const PlaceDetails = ({ place }) => {
  console.log(place)
  return (
    <div>
      <img src={place?.photo ? place.photo.images?.large?.url : ''} />
      <p className='font-bold'>{place.name}</p>
      <p>Rating: {place.rating}</p>
      {place.price_level &&
       <p>Price: {place.price_level}</p>
      }
      <p>Website: <BsGlobe /></p>
    </div>
  )
}

export default PlaceDetails