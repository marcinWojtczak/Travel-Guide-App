import { configureStore } from '@reduxjs/toolkit';
import { travelApi } from '../services/travelAdvisor';
import { weatherApi } from '../services/openWeather';
import { googleMapApi } from '../services/googleMap';


export const store = configureStore({
  reducer: {
    [travelApi.reducerPath]: travelApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [googleMapApi.reducerPath]: googleMapApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(travelApi.middleware, weatherApi.middleware, googleMapApi.middleware),
});


