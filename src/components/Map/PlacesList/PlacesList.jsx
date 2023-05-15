import React, {useState, useEffect, createRef, useContext} from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { ChildClickedContext } from '../../../App';


const PlacesList = ({type, setType, placesInBoundary}) => {
  const { childClicked } = useContext(ChildClickedContext)
  //all references
  const [elRefs, setElRefs] = useState([]);
  const [rating, setRating] = useState('');

  useEffect(() => {
    setElRefs((refs) => Array(placesInBoundary?.data?.length).fill().map((_, index) => refs[index] || createRef()));
  }, [placesInBoundary?.data]);

  return (
    <div className='h-full flex flex-col justify-center items-center '>
      <div className='mx-4 w-[90%] flex flex-col items-start justify-between gap-2'>
        <h4 className='font-bold'>Attractions, Hotel, Restaurants around you</h4>
        <input className='border-2 outline-none px-4 border-zinc-400 w-full h-[45px] rounded-lg shadow-2xl'></input>
        <h6>Choose a type:</h6>
        <div className='mb-6'>
          <select value={type} onChange={(e) => setType(e.target.value)} className='border-2 inline rounded-lg px-2 py-1 mr-2 drop-shadow-lg outline-0'>
            <option value="restaurants">Restaurants</option>
            <option value="attractions">Attractions</option>
            <option value="hotels">Hotels</option>
          </select>
          
          <select value={rating} onChange={(e) => setRating(e.target.value)} className='border-2 rounded-lg inline px-2 py-1 drop-shadow-lg outline-0'>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col gap-6 h-[80%] w-full overflow-x-auto items-center'>
        {placesInBoundary?.data?.map((place, index) => (
        <div key={index} ref={elRefs[index]} className='border-t border-b border-zinc-400 w-[90%] ' >
          <PlaceDetails 
            place={place} 
            selected={Number(childClicked) == index} 
            refProp={elRefs[index]}/>
        </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesList