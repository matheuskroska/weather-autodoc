import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './slices/weatherSlice'

/* Creating a store with the reducer. */
export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
})
