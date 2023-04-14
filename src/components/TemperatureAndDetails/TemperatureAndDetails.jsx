import React from 'react'
import { BsThermometerHalf, BsWind, BsDroplet, BsSunFill } from 'react-icons/bs'

const TemperatureAndDetails = () => {

  
  return (
    <div className='flex justify-between items-center py-8'>
      <BsSunFill style={{ fontSize: '80', color: 'yellow'}}/>
      <div>
        <h2>32°</h2>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-1'>
          <BsThermometerHalf />
          <p className='tracking-wider'>Real Feal: 28°</p>
        </div>
        <div className='flex items-center gap-1'>
          <BsWind />
          <p className='tracking-wider'>Wind: 30km/h</p>
        </div>
        <div className='flex items-center gap-1'>
          <BsDroplet />
          <p className='tracking-wider'>Humidity: 90%</p>
        </div>
        <div className='flex items-center gap-1'>
          <p className='tracking-wider'>Pressure: 113hPa</p>
        </div>
      </div>
    </div>
  )
}

export default TemperatureAndDetails
