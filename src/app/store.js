import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weather/weatherSlice'

/* Creating a store with the reducer. */
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
})
