import React, { useEffect, useState, useContext } from 'react'
import { GoLocation } from 'react-icons/go';
import TemperatureAndDetails from '../TemperatureAndDetails/TemperatureAndDetails';
import { TravelLocationsContext } from '../../App';


const Weather = ({  coordinates }) => {
  const data = useContext(TravelLocationsContext)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toLocaleString())
    }, 1000)
  }, [])

  return (
    <div className='flex w-full  bg-sky-600 text-[white] gap-8 h-full justify-evenly p-0 md:p-4 lg:p-8 xl:p-12'>
      <div className='flex flex-col font-extralight tracking-wide gap-4'>
        <p className='text-lg md:text-base'>{date.toLocaleString()}</p>
        <div className='flex  gap-1'>
          <GoLocation 
            size={30}
            className='w-full md:w-[20px]'
          />
          {data &&
            <h2 className='md:text-[30px] font-semibold tracking-wide'>{data?.data[0]?.result_object.name}</h2>
          }
        </div>
      </div>
      <TemperatureAndDetails />
    </div>
  )
}

export default Weather