import { WEATHER_API_URL } from '../../config/api'
import { ApiOptions } from '../../config/api'
import { pushToList } from '../reducers/weatherSlice'

export const getWeather = (searchData) => async (dispatch) => {
  const [geoCoordinates] = Array(searchData.value)

  const response = await fetch(
    WEATHER_API_URL + `/forecast.json?q=${geoCoordinates}&days=0`,
    ApiOptions,
  )
  const data = await response.json()

  dispatch(pushToList({ ...data }))
}
