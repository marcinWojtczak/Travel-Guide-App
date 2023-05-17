import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const travelAdvisorHeaders = {
  'x-rapidAPI-key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
  'x-rapidAPI-host': 'travel-advisor.p.rapidapi.com',
}

const baseUrl = 'https://travel-advisor.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: travelAdvisorHeaders})

export const travelApi = createApi({
  reducerPath: 'travelApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAttractions: builder.query({
      query: (bounds) => createRequest(`/attractions/list-in-boundary?bl_latitude=${bounds.sw.lat}&tr_latitude=${bounds.ne.lat}&bl_longitude=${bounds.sw.lng}&tr_longitude=${bounds.ne.lng}`)
    }),
    getHotels: builder.query({
      query: (bounds) => createRequest(`/hotels/list-in-boundary?bl_latitude=${bounds.sw.lat}&tr_latitude=${bounds.ne.lat}&bl_longitude=${bounds.sw.lng}&tr_longitude=${bounds.ne.lng}`)
    }),
    getRestaurants: builder.query({
      query: (bounds) => createRequest(`/restaurants/list-in-boundary?bl_latitude=${bounds.sw.lat}&tr_latitude=${bounds.ne.lat}&bl_longitude=${bounds.sw.lng}&tr_longitude=${bounds.ne.lng}`)
    }),
    getPlacesInBoundary: builder.query({
      query: ({type, bounds}) => createRequest(`/${type}/list-in-boundary?bl_latitude=${bounds.sw.lat}&tr_latitude=${bounds.ne.lat}&bl_longitude=${bounds.sw.lng}&tr_longitude=${bounds.ne.lng}`)
      
    }),
  })
})

export const {useGetAttractionsQuery, useGetHotelsQuery, useGetRestaurantsQuery, useGetPlacesInBoundaryQuery} = travelApi

