import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weatherList: [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.weatherList = action.payload
    },
  },
})

export const { updateData } = weatherSlice.actions
export default weatherSlice.reducer
