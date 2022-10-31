import { TrashIcon, UpdateIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from '../../commom/useDebounce'
import { getWeather } from '../../services/api'
import { deleteWeather, updateWeather } from '../../services/database'
import { Button } from '../button/Button'
import { ReactComponent as IconRain } from '../../assets/images/ico-rain.svg'
import {
  StyledAverage,
  StyledButtonContainer,
  StyledCard,
  StyledContainer,
  StyledCurrent,
  StyledFlex,
  StyledLastUpdate,
  StyledTemp,
  StyledTempMinMax,
  StyledTempWrapper,
  StyledTitle,
} from './Card.styled'

export const Card = ({ weather, ...props }) => {
  const weatherLists = useSelector((state) => state.weather.weatherList)

  const handleUpdate = useDebounce((location, weatherLists) =>
    updateAndLogWeather(location, weatherLists),
  )

  const updateAndLogWeather = (location, list) => {
    try {
      list.map(async (city) => {
        if (city.location.id === location.id) {
          const cityWeather = await getWeather(location)
          await updateWeather({ ...cityWeather, doc_id: city.doc_id })
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = (id) => {
    deleteWeather(id)
  }

  return (
    <StyledCard>
      <StyledContainer>
        <StyledTitle>{weather.location.label}</StyledTitle>
        <StyledFlex>
          <StyledTempWrapper>
            <StyledCurrent>
              <img
                src={weather.forecast.forecastday[0].day.condition.icon}
                alt='weatherIcon'
              ></img>
              {weather.current.temp_c}°C
            </StyledCurrent>
            <StyledTempMinMax>
              <span>{weather.forecast.forecastday[0].day.maxtemp_c} °C</span>
              <span>{weather.forecast.forecastday[0].day.mintemp_c} °C</span>
            </StyledTempMinMax>
          </StyledTempWrapper>
          <StyledAverage>
            <span>AVG {weather.forecast.forecastday[0].day.avgtemp_c} °C</span>
            <span>
              <IconRain />
              {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
            </span>
          </StyledAverage>
        </StyledFlex>
        <StyledLastUpdate>
          <span>
            <bold>ATUALIZADO EM :</bold> {weather.location.lastUpdate}
          </span>
        </StyledLastUpdate>
      </StyledContainer>
      <StyledButtonContainer>
        <Button variant='svg' onClick={() => handleDelete(weather.doc_id)}>
          <TrashIcon />
        </Button>
        <Button
          variant='svg'
          onClick={() => handleUpdate(weather.location, weatherLists)}
        >
          <UpdateIcon />
        </Button>
      </StyledButtonContainer>
    </StyledCard>
  )
}
