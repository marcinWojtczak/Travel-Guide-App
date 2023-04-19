import React, {useEffect, useState} from 'react'
import {getAttractionsData} from '../../api/travelAdvisorApi'

const TouristAttractions = ({ searchingData}) => {
  
  const [attractions, setAttractions] = useState([])
  console.log(attractions)
  const location_id = searchingData?.[0]?.result_object?.location_id
  
  useEffect(() => {
    getAttractionsData(location_id)
    .then((data) => {
      setAttractions(data)
    })
  }, [])
  
  return (
    <div>
      <p>Attraction ranking position:</p>
      <div className='flex'>
        {attractions?.data
          ?.filter(attraction => attraction.ranking_position >= 1 && attraction.ranking_position <= 5)
          .sort((a, b) => a.ranking_position - b.ranking_position)
          .map((attraction, index) => (
            <div className='flex flex-col'>
              <img src={attraction.photo.images.small.url}/>
              <h4 className='font-semibold' key={index}>
                {attraction.name}
              </h4>
              <p>{attraction.subtype[0].name}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TouristAttractions