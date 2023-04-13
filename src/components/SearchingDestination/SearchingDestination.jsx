import React, { useState, useEffect} from 'react'
// import { getSearchingData } from '../../api/travelAdvisorApi'
import Forecast from '../Forecast/Forecast'

const SearchingDestination = ({ destination, coordinates}) => {

  const [searchingPlace, setSearchingPlace] = useState([])
  console.log(searchingPlace)

  // pages[0].extract;
  // Get wikipedia data
  // useEffect(() => {
  //   getSearchingData(destination)
  //     .then((data) => {
  //       setSearchingPlace(data)
  //     })
  // }, [])

  // result_object.name, result_object.photo.images{small: {…}, thumbnail: {…}, original: {…}, large: {…}, medium: {…}} result_object.geo_description:
  return (
    <div className='flex flex-row p-16'>
      <div className="flex flex-col basis-3/4 gap-8 justify-between items-center">
        {searchingPlace &&
          <h3>Miasto: {searchingPlace[0]?.result_object.name}</h3>
        }
      </div>
      <Forecast  coordinates={coordinates} className='basis-1/4'/>
      
    </div>
  )
}

export default SearchingDestination