import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../features/weather/weatherSlice'
import weatherLogReducer from '../features/weatherLog/weatherLogSlice'
import loaderReducer from '../features/loader/loaderSlice'

/* Creating a store with the reducer. */
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    weatherLog: weatherLogReducer,
    loader: loaderReducer,
  },
})
