import { configureStore } from '@reduxjs/toolkit';
import {coordinatesApi} from '../services/coordinatesApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [coordinatesApi.reducerPath]: coordinatesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coordinatesApi.middleware),
})