import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weatherLogList: [],
}

export const weatherLogSlice = createSlice({
  name: 'weatherLog',
  initialState,
  reducers: {
    updateLogData: (state, action) => {
      state.weatherLogList = action.payload
    },
  },
})

export const { updateLogData } = weatherLogSlice.actions
export default weatherLogSlice.reducer
