import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const googleApiKey = process.env.REACT_APP_GOOGLE_MAP_KEY


export const googleMapApi = createApi({
  reducerPath: 'googleMapApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://maps.googleapis.com/maps/api'}),
  endpoints: (builder) => ({
    getPlaceName: builder.query({
      query: (coordinates) => (`/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${googleApiKey}`)
    }),

  })
})

export const { useGetPlaceNameQuery } = googleMapApi;