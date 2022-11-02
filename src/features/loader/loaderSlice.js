import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loaderState: {
    loading: false,
    name: '',
    id: 0,
    error: false,
    message: '',
  },
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loaderState = action.payload
    },
  },
})

export const { setLoader } = loaderSlice.actions
export default loaderSlice.reducer
