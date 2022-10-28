import { WEATHER_API_URL } from '../../api'
import { ApiOptions } from '../../api'
import { pushToList } from '../../redux/slices/weatherSlice'

export const getWeather = (searchData) => async (dispatch) => {
  const [geoCoordinates] = Array(searchData.value)

  const response = await fetch(
    // forecast endpoint returns current and forecast data
    WEATHER_API_URL + `/forecast.json?q=${geoCoordinates}&days=3`,
    ApiOptions,
  )
  const data = await response.json()

  dispatch(pushToList({ ...data, id: searchData.id }))
}
