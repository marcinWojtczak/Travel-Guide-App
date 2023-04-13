import React, { useEffect, useState } from 'react'
import { getWeatherData } from '../../api/openWeatherApi'


const Forecast = ({ coordinates }) => {

  const [weatherData, setWeatherData] = useState()
  console.log(weatherData)

  useEffect(() => {
    getWeatherData(coordinates)
      .then((data) => {
        setWeatherData(data)
      })
  }, [])

  return (
    <div className='w-full bg-blue-500'>
      <h4>Warsaw</h4>
    </div>
  )
}

export default Forecast