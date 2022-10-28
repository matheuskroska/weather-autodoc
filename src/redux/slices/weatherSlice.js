import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weatherList: [],
}

/* Creating a slice of the state. */
export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    pushToList: (state, action) => {
      state.weatherList = [...state.weatherList, { ...action.payload }]
    },
    removeFromList: (state, action) => {
      state.weatherList = state.weatherList.filter(
        (weather) => weather.id !== action.payload,
      )
    },
  },
})

/* Exporting the actions from the slice. */
export const { pushToList, removeFromList } = weatherSlice.actions

/* Exporting the reducer function. */
export default weatherSlice.reducer
