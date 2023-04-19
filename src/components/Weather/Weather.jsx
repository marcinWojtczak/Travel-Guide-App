import React, { useEffect, useState } from 'react'
import { getWeatherData, getDailyWeather } from '../../api/openWeatherApi';
import { GoLocation } from 'react-icons/go';
import TemperatureAndDetails from '../TemperatureAndDetails/TemperatureAndDetails';


const Weather = ({ searchingData, coordinates }) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toLocaleString())
    }, 1000)
  }, [])

  return (
    <div className='flex flex-col w-full bg-sky-600 p-8 text-[white] gap-10'>
      <div className='flex justify-center font-extralight tracking-wide'>
        <p>{date.toLocaleString()}</p>
      </div>
      <div className='flex justify-center gap-8'>
        <div className='flex items-center gap-1'>
          <GoLocation size={20}/>
          {searchingData &&
            <h4>{searchingData[0]?.result_object.name}</h4>
          }
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
      <TemperatureAndDetails coordinates={coordinates}/>
    </div>
  )
}

export default Weather