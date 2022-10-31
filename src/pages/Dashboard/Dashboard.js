import { ArchiveIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTemperature } from '../../commom/useTemperature'
import { Card } from '../../features/card/Card'
import { updateLogData } from '../../features/weatherLog/weatherLogSlice'
import { listenData, weatherRecordsLogRef } from '../../services/database'
import { ContainerPage } from '../ContainerPage/ContainerPage'
import { StyledList } from '../Home/HomeStyled'
import { StyledListItem, StyledTitle } from './Dashboard.Styled'

export const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    listenData(dispatch, weatherRecordsLogRef, updateLogData)
  }, [dispatch])

  const weatherLogLists = useSelector(
    (state) => state.weatherLog.weatherLogList,
  )

  const tempMax = useTemperature(weatherLogLists, Math.max)
  const tempMin = useTemperature(weatherLogLists, Math.min)

  return (
    <ContainerPage
      icon={<ArchiveIcon />}
      pageTitle='Minhas Observações'
      pageSubtitle='Informações detalhadas sobre o clima das cidades com a maior e menor temperatura registradas até o momento.'
      buttonTitle='Voltar'
      toUrl='/'
    >
      <StyledTitle>Cidade(s) com a maior temperatura:</StyledTitle>
      <StyledList>
        {tempMax.length ? (
          tempMax.map((weather) => (
            <StyledListItem key={weather.key}>
              <Card extended weather={weather}></Card>
            </StyledListItem>
          ))
        ) : (
          <p>Nenhuma observação</p>
        )}
      </StyledList>
      <StyledTitle>Cidade(s) com a menor temperatura:</StyledTitle>
      <StyledList>
        {tempMin.length ? (
          tempMin.map((weather) => (
            <StyledListItem key={weather.key}>
              <Card extended weather={weather}></Card>
            </StyledListItem>
          ))
        ) : (
          <p>Nenhuma observação</p>
        )}
      </StyledList>
    </ContainerPage>
  )
}
