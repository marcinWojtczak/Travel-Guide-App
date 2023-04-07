import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const { data } = await axios.get(URL, {
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
      // console.log(data.atraction)
      return data

  } catch(error) {
    console.log(error)
  }
}