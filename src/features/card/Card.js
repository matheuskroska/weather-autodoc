import { TrashIcon, UpdateIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../services/api'
import { deleteWeather, updateWeather } from '../../services/database'
import { Button } from '../button/Button'
import {
  StyledButtonContainer,
  StyledCard,
  StyledContainer,
  StyledDaysButtonWrapper,
  StyledFlex,
  StyledLastUpdate,
  StyledTitle,
} from './Card.styled'
import { setLoader } from '../loader/loaderSlice'
import { Loader } from '../loader/Loader'
import { convertDate } from '../../commom/convertDate'
import { ForecastCard } from './ForecastCard'

export const Card = ({ extended, weather, ...props }) => {
  const dispatch = useDispatch()
  const weatherLists = useSelector((state) => state.weather.weatherList)
  const loader = useSelector((state) => state.loader.loaderState)
  const [curDay, setCurDay] = useState(0)
  const [convertedDay, setConvertedDay] = useState([])

  const handleUpdate = (location, weatherLists, e) => {
    updateAndLogWeather(location, weatherLists)
  }

  const updateAndLogWeather = (location, list) => {
    try {
      dispatch(
        setLoader({
          loading: true,
          error: false,
          message: '',
          name: 'update',
          id: location.id,
        }),
      )
      list.map(async (city) => {
        if (city.location.id === location.id) {
          const cityWeather = await getWeather(location)
          await updateWeather({ ...cityWeather, doc_id: city.doc_id })
          dispatch(
            setLoader({
              loading: false,
              error: false,
              message: '',
              name: '',
              id: 0,
            }),
          )
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = (id) => {
    deleteWeather(id)
  }

  /* A hook that is called when the component is mounted and when the weather variable changes. */
  useEffect(() => {
    const days = weather.forecast.map((day) => {
      return convertDate(day.date).replace('.', '')
    })
    setConvertedDay(days)
  }, [weather])

  return (
    <StyledCard key={weather.location.id}>
      <StyledContainer>
        <StyledTitle>{weather.location.label}</StyledTitle>
        <StyledFlex extended>
          {curDay === 0 ? (
            <>
              <ForecastCard
                extended={extended}
                weather={weather}
                currentDay={0}
              ></ForecastCard>
            </>
          ) : curDay === 1 ? (
            <>
              <ForecastCard
                extended={extended}
                weather={weather}
                currentDay={1}
              ></ForecastCard>
            </>
          ) : (
            <>
              <ForecastCard
                extended={extended}
                weather={weather}
                currentDay={2}
              ></ForecastCard>
            </>
          )}
        </StyledFlex>
        <StyledDaysButtonWrapper>
          <Button
            active={curDay === 0}
            variant='days'
            onClick={() => setCurDay(0)}
          >
            {convertedDay[0]}
          </Button>
          <Button
            active={curDay === 1}
            variant='days'
            onClick={() => setCurDay(1)}
          >
            {convertedDay[1]}
          </Button>
          <Button
            active={curDay === 2}
            variant='days'
            onClick={() => setCurDay(2)}
          >
            {convertedDay[2]}
          </Button>
        </StyledDaysButtonWrapper>
        <StyledLastUpdate>
          <span>
            <span>ATUALIZADO EM :</span> {weather.location.lastUpdate}
          </span>
        </StyledLastUpdate>
      </StyledContainer>
      <StyledButtonContainer>
        <Button variant='svg' onClick={() => handleDelete(weather.doc_id)}>
          <TrashIcon />
        </Button>

        {loader.id === weather.location.id ? (
          <Loader type='update' />
        ) : (
          <>
            <Button
              id={weather.location.id}
              variant='svg'
              onClick={(e) => handleUpdate(weather.location, weatherLists, e)}
            >
              <UpdateIcon />
            </Button>
          </>
        )}
      </StyledButtonContainer>
    </StyledCard>
  )
}
