import React, { useState, useEffect} from 'react'
// import { getSearchingData } from '../../api/travelAdvisorApi'
import Forecast from '../Weather/Weather'

const SearchingDestination = ({ destination, coordinates}) => {

  const [searchingPlace, setSearchingPlace] = useState([])

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