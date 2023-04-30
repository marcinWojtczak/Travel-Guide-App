import React, {useEffect, useState, useContext } from 'react';
import { BsThermometerHalf, BsWind, BsDroplet, BsSunFill } from 'react-icons/bs';
import weather from '../../assets/icons/01d.png'
import { useGetWeatherQuery } from '../../services/openWeather';
import { CoordinatesContext } from '../../App';

const TemperatureAndDetails = () => {
  const coordinates = useContext(CoordinatesContext)
  
  const { data, isLoading, error } = useGetWeatherQuery(coordinates)
  console.log(data)
  

  const weatherData = data?.weather[0]
  const weatherMain = data?.main
  
  return (
    <>
      <div className='flex justify-between items-center '>
        <div className='flex flex-col items-start justify-start gap-2'>
          <div className='flex items-center justify-start '>
            {weatherData?.icon &&
              (
                <>
                  <img 
                    src={require(`../../assets/icons/${weatherData.icon}.png`)} alt='weather icon'
                    className='w-[110px] md:w-[70px]'
                  />
                  <div className='flex'>
                    <span className='text-[70px] md:text-[50px]'>{Math.floor(weatherMain?.temp)}</span>
                    <div className='flex items-center'>
                      <h2 className='text-[70px] md:text-[50px]'>°C</h2>
                    </div>
                  </div>
                </>
              )
            }
          </div>
          <div className='tracking-wider'>
            <h4 className='md:font-[18px]'>{weatherData?.description}</h4>
          </div>
        </div>
        <div className='flex justify-between items-center gap-4 sm:flex-row md:flex-col'>
          <div className='flex items-center gap-1'>
            <BsThermometerHalf />
            <p className='tracking-wider'>Real Feal: {weatherMain?.feels_like?.toFixed()}°</p>
          </div>
          <div className='flex items-center gap-1'>
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
          <div className='flex items-center justify-between gap-3 xl:gap-6'>
            <p>Temp. Max: {Math.floor(weatherMain?.temp_max)}</p>
            <p>Temp. Min: {Math.floor(weatherMain?.temp_min)}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TemperatureAndDetails
