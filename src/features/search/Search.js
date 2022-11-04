import { getCity, getWeather } from '../../services/api'
import { addWeather } from '../../services/database'
import { StyledSearch } from './Search.styled'

export const Search = () => {
  const handleOnChange = async (city) => {
    try {
      const cityWeather = await getWeather(city)
      addWeather(cityWeather)
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnLoadOptions = async (cityName) => {
    try {
      const cityData = await getCity(cityName)
      return cityData === undefined ? { options: [] } : cityData
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledSearch
      placeholder='Busque pelo nome da cidade...'
      debounceTimeout={600}
      value=''
      loadOptionsOnMenuOpen={false}
      onChange={handleOnChange}
      loadOptions={handleOnLoadOptions}
    />
  )
}
