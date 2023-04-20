import axios from 'axios';

// const rapidApiKey = '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a'

export const getSearchingData = async (searchingDestination) => {
  try {
    const { data: {data} } = await axios.get('https://travel-advisor.p.rapidapi.com/locations/search' ,{
    params: {
      query: searchingDestination
    },
    headers: {
        'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
    return data
  } catch(error) {
    console.log(error)
  }
}

export const getAttractionsData = async (location_id ) => {
  try {
    const { data } = await axios.get('https://travel-advisor.p.rapidapi.com/attractions/list', {
      params: {
        location_id: location_id,
        
      },
      headers: {
        'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

export const getRestaurantsData = async (sw, ne) => {
  try {
    const { data } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        bl_latitude: sw.lat,
      },
      headers: {
      'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })
      
      return data

  } catch(error) {
    console.log(error)
  }
}

