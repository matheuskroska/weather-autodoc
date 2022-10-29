import { createSlice } from '@reduxjs/toolkit'
import { addWeather } from '../../db/actions'
import { deleteWeather } from '../../db/actions'
import { refreshDataFireBase } from '../../db/actions'

const initialState = {
  weatherList: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    pushToList: (state, action) => {
      addWeather(action.payload)
    },
    removeFromList: (state, action) => {
      deleteWeather(action.payload)
    },
    updateData: (state, action) => {
      state.weatherList = action.payload
    },
  },
})

export const { pushToList, removeFromList, updateData } = weatherSlice.actions

export default weatherSlice.reducer
