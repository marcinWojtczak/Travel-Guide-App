// import axios from 'axios';

// const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary'
//   const options = {
//     params: {
//       tr_longitude: '109.262909',
//       tr_latitude: '12.346705',
//       bl_longitude: '109.095887',
//       bl_latitude: '12.113245'
//     },
//     headers: {
//     'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//     }
// };

// export const getPlacesData = async () => {
//   try {
//     const { data: {data} } = await axios.get(URL, options)
      
//       return data

//   } catch(error) {
//     console.log(error)
//   }
// }