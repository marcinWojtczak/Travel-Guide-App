import React, {useEffect, useState} from 'react'
import { BsThermometerHalf, BsWind, BsDroplet, BsSunFill } from 'react-icons/bs'
import { getWeatherData } from '../../api/openWeatherApi'
import weather from '../../assets/icons/01d.png'

const TemperatureAndDetails = ({ coordinates }) => {
  const [weatherData, setWeatherData] = useState(null)
  
  useEffect(() => {
    getWeatherData(coordinates)
      .then((data) => {
        setWeatherData(data)
      })
  }, [coordinates])

  return (
    <>
      <div className='flex flex-col justify-between items-center gap-8'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='tracking-wider'>
            <p>{weatherData?.weather[0].description}</p>
          </div>
          <div className='flex items-center justify-start gap-4'>
            {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].icon &&
              (
                <>
                  <img width='80px' src={require(`../../assets/icons/${weatherData?.weather[0].icon}.png`)} alt='weather icon'/>
                  <div className='flex'>
                    <span className='text-[70px]'>{Math.floor(weatherData?.temp)}</span>
                    <div className='flex items-center'>
                      <h2 className='text-[60px]'>°C</h2>
                    </div>
                  </div>
                </>
              )
            }
            
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-1'>
            <BsThermometerHalf />
            <p className='tracking-wider'>Real Feal: {weatherData?.feels_like.toFixed()}°</p>
          </div>
          <div className='flex items-center gap-1'>
            <BsWind />
            <p className='tracking-wider'>Wind: {weatherData?.speed.toFixed(1)} m/s</p>
          </div>
          <div className='flex items-center gap-1'>
            <BsDroplet />
            <p className='tracking-wider'>Humidity: {weatherData?.humidity.toFixed()}%</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='tracking-wider'>Pressure: {weatherData?.pressure.toFixed()}hPa</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p>Temp. Max: {Math.floor(weatherData?.temp_max)}</p>
        <p>Temp. Min: {Math.floor(weatherData?.temp_min)}</p>
      </div>
    </>
  )
}

export default TemperatureAndDetails
