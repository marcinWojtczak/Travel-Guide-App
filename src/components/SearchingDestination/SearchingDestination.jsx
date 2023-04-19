

const SearchingDestination = ({ searchingData }) => {

  const location = searchingData?.[0]?.result_object?.ancestors

  const displayData = () => {
    if(!searchingData || searchingData.length === 0) {
      return <h3>Can't find the destinations</h3>;
    }

    const resultType = searchingData[0]?.result_type
    const resultObject = searchingData[0]?.result_object;

    if(resultType === 'geos') {
      return (
        <div className='flex flex-col gap-8'>
          <img src={resultObject.photo.images.original.url} height='500'  />
          <h2 className='font-semibold'>About {resultObject?.name}</h2>
          <h4>{resultObject?.geo_description}</h4>
        </div>
      )
    } else if (resultType === 'things_to_do') {
      return (
        <div className='flex flex-col gap-8'>
          <img src={resultObject.photo.images.large.url} />
          <h2 className='font-semibold'>{resultObject?.name}</h2>
          <h5>{searchingData[0]?.review_snippet?.snippet}</h5>
        </div>
      )
    } else {
      return (
        <h3>Can't find the destinations</h3>
      )
    }
  }
  

  return (
    <div className='flex flex-col p-16'>
      {/* { location &&
        <div className='flex my-2'>
          <p>{ location[2]?.name } ></p>
          <p>{ location[1]?.name } ></p>
          <p>{ location[0]?.name }</p>
        </div>
      } */}
      {displayData()}
    </div>
  )
}

export default SearchingDestination