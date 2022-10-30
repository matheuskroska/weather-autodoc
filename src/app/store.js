import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weather/weatherSlice'
import weatherLogReducer from '../features/weatherLog/weatherLogSlice'

/* Creating a store with the reducer. */
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    weatherLog: weatherLogReducer,
  },
})
