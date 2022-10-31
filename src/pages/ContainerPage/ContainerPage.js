import { PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../features/button/Button'
import {
  StyledContainer,
  StyledMain,
  StyledSection,
  StyledSubtitle,
  StyledTitle,
  StyledToolbar,
  StyledWrapper,
} from './Container.styled'
import { useBatchWeather } from '../../commom/useBatchWeather'
import { deleteAllWeather } from '../../services/database'
import { ReactComponent as IconDice } from '../../assets/images/dice.svg'
import { useSelector } from 'react-redux'

export const ContainerPage = ({
  icon,
  pageTitle,
  pageSubtitle,
  buttonTitle,
  toUrl,
  ...props
}) => {
  const weatherLists = useSelector((state) => state.weather.weatherList)

  return (
    <StyledMain>
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>
            {pageTitle}
            {icon}
          </StyledTitle>
          <StyledSubtitle>{pageSubtitle}</StyledSubtitle>
          <Button variant='primary'>
            <Link to={toUrl}>{buttonTitle}</Link>
          </Button>
          <StyledToolbar>
            <Button variant='toolbarSVG' onClick={useBatchWeather}>
              <IconDice />
            </Button>
            {weatherLists.length > 0 && (
              <Button variant='toolbarSVG' onClick={deleteAllWeather}>
                <TrashIcon />
              </Button>
            )}
          </StyledToolbar>

          <StyledSection>{props.children}</StyledSection>
        </StyledWrapper>
      </StyledContainer>
    </StyledMain>
  )
}
