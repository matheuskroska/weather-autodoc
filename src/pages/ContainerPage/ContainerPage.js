import { TrashIcon } from '@radix-ui/react-icons'
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
import { useBatchWeather as batchWeather } from '../../commom/useBatchWeather'
import { deleteAllWeather } from '../../services/database'
import { ReactComponent as IconDice } from '../../assets/images/dice.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../features/loader/Loader'

export const ContainerPage = ({
  icon,
  pageTitle,
  pageSubtitle,
  buttonTitle,
  toUrl,
  ...props
}) => {
  const dispatch = useDispatch()
  const weatherLists = useSelector((state) => state.weather.weatherList)
  const loader = useSelector((state) => state.loader.loaderState)
  const handleGetRandom = () => {
    batchWeather(dispatch)
  }

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
            {loader.loading && loader.name === 'batch' ? (
              <>
                <Loader />
              </>
            ) : (
              <Button
                variant='toolbarSVG'
                width='140'
                height='64'
                onClick={() => handleGetRandom()}
              >
                <IconDice />
              </Button>
            )}

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
