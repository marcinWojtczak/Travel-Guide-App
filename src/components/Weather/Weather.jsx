import React, { useEffect, useState, useContext } from 'react'
import { GoLocation } from 'react-icons/go';
import TemperatureAndDetails from '../TemperatureAndDetails/TemperatureAndDetails';
import PlaceDataContext from '../../context/PlaceDataContext';


const Weather = () => {
  const { data } = useContext(PlaceDataContext)
  const [date, setDate] = useState(new Date())
  const placeData = data?.plus_code?.compound_code
  const placeName = placeData?.split(' ')[1]

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toLocaleString())
    }, 1000)
  }, [])

  return (
    <div className='text-[black] gap-4 h-full m-4 p-4 sm:p-6 border-y border-zinc-300'>
      <div className='flex flex-col sm:flex-row items-center justify-between font-extralight tracking-wide gap-4 mb-4'>
        <div className='flex gap-2 items-center'>
          <GoLocation 
            size={20}
            className='w-full md:w-[20px]'
          />  
          {data &&
            <h4 className='md:text-[30px] font-semibold tracking-wide'>{placeName}</h4>
          }
        </div>
        <p className='text-lg md:text-base'>{date.toLocaleString()}</p>
      </div>
      <TemperatureAndDetails />
    </div>
  )
}

export default Weather