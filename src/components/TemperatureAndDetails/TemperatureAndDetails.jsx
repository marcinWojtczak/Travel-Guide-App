import React, { useContext } from 'react';
import { BsThermometerHalf, BsWind, BsDroplet, } from 'react-icons/bs';
import weather from '../../assets/icons/01d.png'
import { useGetWeatherQuery } from '../../services/openWeather';
import PlaceDataContext from '../../context/PlaceDataContext';

const TemperatureAndDetails = () => {
  const { coordinates } = useContext(PlaceDataContext)
  
  const { data, isLoading, error } = useGetWeatherQuery(coordinates)
  const weatherData = data?.weather[0]
  const weatherMain = data?.main

  if(isLoading) return <h4>Loading...</h4>
  
  return (
    <>
      <div className='flex justify-center sm:justify-between items-center gap-8 sm:gap-0'>
        <div className='flex flex-col items-center justify-start gap-2'>
          <div className='flex items-center justify-start gap-2'>
            {weatherData?.icon &&
              (
                <>
                  <img 
                    src={require(`../../assets/icons/${weatherData.icon}.png`)} alt='weather icon'
                    width='40'
                  />
                  <div className='flex'>
                    <span className='text-[25px] md:text-[25px]'>{Math.floor(weatherMain?.temp)}</span>
                    <div className='flex items-center'>
                      <h4 className='text-[25px] md:text-[25px]'>°C</h4>
                    </div>
                  </div>
                </>
              )
            }
          </div>
          <div className='tracking-wider'>
            <p className='md:font-[18px]'>{weatherData?.description}</p>
          </div>
        </div>
        <div className='hidden sm:flex justify-between items-center gap-2 flex-col'>
          <div className='flex items-center gap-1'>
            <BsThermometerHalf />
            <p className='tracking-wider'>Real Feal: {weatherMain?.feels_like?.toFixed()}°</p>
          </div>
          <p>Temp. Max: {Math.floor(weatherMain?.temp_max)}</p>
          <p>Temp. Min: {Math.floor(weatherMain?.temp_min)}</p>
        </div>
        <div className='flex justify-between items-center gap-2 flex-col'>
          <div className='flex items-center gap-2'>
            <BsWind />
            <p className='tracking-wider'>Wind: {data?.wind?.speed?.toFixed(1)} m/s</p>
          </div>
          <div className='flex items-center gap-1'>
            <BsDroplet />
            <p className='tracking-wider'>Humidity: {weatherMain?.humidity?.toFixed()}%</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='tracking-wider'>Pressure: {weatherMain?.pressure?.toFixed()}hPa</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TemperatureAndDetails
