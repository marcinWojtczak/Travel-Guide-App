import React from 'react';
import { BsFillTelephoneFill, BsGlobe } from "react-icons/bs";


const PlaceDetails = ({ place }) => {
  
  return (
    <div className='flex flex-col gap-4'>
      <img src={place?.photo ? place.photo.images?.large?.url : ''} />
      <div className='px-2 mb-4 flex flex-col gap-3'>
        <h4 className='font-bold'>{place.name}</h4>
        <div className='flex justify-between'>
          <p>Rating: </p>
          <p>{place?.rating} ({place.num_reviews})</p>
        </div>
        <div className='flex justify-between'>
          <p>Ranking: </p>
          <p>{place?.ranking}</p>
        </div>
        {place.price &&
        <div className='flex justify-between'>
          <p>Price: </p>
          <p>{place.price}</p>
        </div>
        }
        <div className='flex flex-wrap gap-2'>
          {place?.cuisine?.map(({name}) => (
            <label className='border-2 rounded-md px-3 bg-gray-300'>{name}</label>
          ))}
        </div>
        <div className='flex items-center'>
          <a className='underline underline-offset-2 mr-10 text-blue-900' target='_blank' href={place?.web_url}><BsGlobe className='inline mr-1 '/>Trip Advisor Website</a>
          <a className='underline underline-offset-2 text-blue-900' target='_blank' href={place?.website}> Website</a>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails