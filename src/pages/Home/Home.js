import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from '../../features/search/Search'
import { ContainerPage } from '../ContainerPage/ContainerPage'
import { updateData } from '../../features/weather/weatherSlice'

import { listenData, weatherRecordsRef } from '../../services/database'
import { Card } from '../../features/card/Card'
import { StyledList, StyledListItem } from './HomeStyled'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const Home = () => {
  const dispatch = useDispatch()
  const weatherLists = useSelector((state) => state.weather.weatherList)

  useEffect(() => {
    listenData(dispatch, weatherRecordsRef, updateData)
  }, [dispatch])

  return (
    <ContainerPage
      icon={<MagnifyingGlassIcon />}
      pageTitle='Minhas Consultas '
      pageSubtitle='Consulte o clima de qualquer cidade do mundo'
      buttonTitle='Mostrar Max/Min'
      toUrl='/dashboard'
    >
      <Search></Search>
      {weatherLists && (
        <StyledList>
          {weatherLists &&
            weatherLists.map((weather) => (
              <StyledListItem>
                <Card weather={weather}></Card>
              </StyledListItem>
            ))}
        </StyledList>
      )}
    </ContainerPage>
  )
}
