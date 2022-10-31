import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../features/button/Button'
import {
  StyledContainer,
  StyledMain,
  StyledSection,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
} from './Container.styled'

export const ContainerPage = ({
  icon,
  pageTitle,
  pageSubtitle,
  buttonTitle,
  toUrl,
  ...props
}) => {
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
          <StyledSection>{props.children}</StyledSection>
        </StyledWrapper>
      </StyledContainer>
    </StyledMain>
  )
}
