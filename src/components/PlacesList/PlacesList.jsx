import React, {useState} from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const PlacesList = ({ places }) => {
  console.log(places)
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  // const places = [
  //   {name: 'Cool Place'},
  //   {name: 'Best Bear'},
  //   {name: 'Best Steak'},
  //   {name: 'Cool Place'},
  //   {name: 'Best Bear'},
  //   {name: 'Best Steak'},
  //   {name: 'Cool Place'},
  //   {name: 'Best Bear'},
  //   {name: 'Best Steak'},
  // ]

  return (
    <div className='h-full'>
      <div className='mx-4'>
        <h4 className='mb-4 font-bold'>Attractions, Hotel, Restaurants around you</h4>
        <h6 className='mb-2'>Choose a type:</h6>
        <div className='mb-4'>
          <select value={type} onChange={(e) => setType(e.target.value)} className='border-2 inline px-2 py-1 mr-2 drop-shadow-lg outline-0'>
            <option value="restaurants">Restaurants</option>
            <option value="attractions">Attractions</option>
            <option value="hotels">Hotels</option>
          </select>
          
          <select value={rating} onChange={(e) => setRating(e.target.value)} className='border-2 inline px-2 py-1 drop-shadow-lg outline-0'>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col gap-6 h-full w-full overflow-x-auto items-center'>
        {places?.data?.map((place, index) => (
        <div className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[90%] outline-0'>
          <PlaceDetails place={place}/>
        </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesList