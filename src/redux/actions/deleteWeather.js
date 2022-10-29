import { removeFromList } from '../reducers/weatherSlice'

export const deleteWeather = (id) => async (dispatch) => {
  dispatch(removeFromList(id))
}
