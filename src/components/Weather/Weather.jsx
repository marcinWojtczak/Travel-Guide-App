import React, { useEffect, useState } from 'react'
import { getWeatherData } from '../../api/openWeatherApi';
import { GoLocation } from 'react-icons/go';
import TemperatureAndDetails from '../TemperatureAndDetails/TemperatureAndDetails';
import Forecast from '../Forecast/Forecast';





const Weather = ({ coordinates }) => {

  const [weatherData, setWeatherData] = useState()
  console.log(weatherData)

  useEffect(() => {
    getWeatherData(coordinates)
      .then((data) => {
        setWeatherData(data)
      })
  }, [])

  return (
    <div className='w-full bg-sky-600 px-8 text-[white]'>
      <div className='flex justify-center py-8 font-extralight tracking-wide'>
        <p>Friday, 14.04.2023 | Local time: 8:38 AM</p>
      </div>
      <div className='flex justify-center gap-8'>
        <div className='flex items-center gap-1'>
          <GoLocation size={20}/>
          <h4>Warsaw</h4>
        </div>
        <div className='flex gap-1'>
          <button>
            <h4>C°</h4>
          </button>
          <h4>|</h4>
          <button>
            <h4>F°</h4>
          </button>
        </div>
      </div>
      <TemperatureAndDetails />
      <Forecast />
    </div>
  )
}

export default Weather