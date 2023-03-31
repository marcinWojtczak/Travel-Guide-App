// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const travelApiHeaders = {
//     'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
//     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
// }

// const baseUrl =  'https://tripadvisor16.p.rapidapi.com/'

// const createRequest = (url) => ({ url, headers: travelApiHeaders})

// export const cryptoApi = createApi({
//   reducerPath: 'travelApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getTravel: builder.query({
//       query: () => createRequest(),
//     }),
//   })
// })

// // const options = {
// //   method: 'GET',
// //   url: 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport',
// //   params: {query: 'london'},
// //   headers: {
// //     'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
// //     'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
// //   }
// // };