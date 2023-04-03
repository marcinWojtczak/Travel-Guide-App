import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
  'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
}

const baseUrl = 'https://travel-advisor.p.rapidapi.com'
const createRequest = (url) => ({ url, headers })

export const coordinatesApi = createApi({
  reducerPath: 'coordinatesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoordinates: builder.query({
      query: ({tr_latitude, tr_longitude, bl_latitude, bl_longitude }) => createRequest (`attractions/list-in-boundary?tr_longitude=${tr_longitude}&tr_latitude=${tr_latitude}&bl_longitude=${bl_longitude}&bl_latitude=${bl_latitude}`),
      
    }),
  }),
})


export const { useGetCoordinatesQuery } = coordinatesApi