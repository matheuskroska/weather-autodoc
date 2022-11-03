import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

export const StyledCard = styled.div`
  width: 100%;
  position: relative;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.sm};
`

export const StyledContainer = styled.div`
  padding: ${theme.space[1]};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: ${theme.borderRadius.sm};
`

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${theme.space[1]};
  gap: ${theme.space[1]};
  position: absolute;
  top: 0;
  right: 10px;
`

export const StyledTitle = styled.h2`
  font-size: ${theme.font.sizes.paragraph};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 75%;
  margin-bottom: ${theme.space[0]};
`

export const StyledTempContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${theme.space[0]};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.space[2]};
  }
`

export const StyledTempWrapper = styled.div`
  display: flex;
`

export const StyledTempMinMax = styled.div`
  display: flex;
  margin-left: ${theme.space[1]};
  gap: ${theme.space[0]};
  font-weight: ${theme.font.weigths.medium};
  align-items: center;

  div:first-child {
    flex-direction: column;
    display: flex;
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
  }

  span:first-child {
    font-size: ${theme.font.sizes.small};
  }

  span:last-child {
    color: ${theme.colors.gray400};
    font-size: ${theme.font.sizes.xsmall};
  }
`

export const StyledAverage = styled.div`
  display: flex;
  flex-direction: column;
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    span:first-child {
      font-weight: ${theme.font.weigths.bold};
      margin-right: ${theme.space[0]};
    }
    span {
      text-align: center;
      font-size: ${theme.font.sizes.small};
    }
    span:last-child {
      font-size: ${theme.font.sizes.small};
    }
  }
  div:last-child {
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: ${theme.breakpoints.tablet}) {
      justify-content: start;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span:last-child {
      font-size: ${theme.font.sizes.small};
    }
  }
`

export const StyledCurrent = styled.p`
  font-size: ${theme.font.sizes.large};
  display: flex;
  align-items: center;
`

export const StyledFlex = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${theme.space[1]};

  ${(props) =>
    props.extended &&
    css`
      @media (max-width: ${theme.breakpoints.tablet}) {
        flex-direction: column;
      }
    `}
`
export const StyledLastUpdate = styled.div`
  span > span {
    font-weight: ${theme.font.weigths.bold};
    margin-right: ${theme.space[0]};
  }
  font-size: ${theme.font.sizes.xsmall};
  color: ${theme.colors.gray400};
`

export const StyledTextConditionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[0]};
  width: 100%;
`

export const StyledTextCondition = styled.p`
  width: 100%;
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.gray400};
`

export const StyledDaysButtonWrapper = styled.div`
  border-radius: ${theme.borderRadius.sm};
  overflow: hidden;
  width: fit-content;
  display: flex;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  margin: ${theme.space[1]} 0;
`

export const StyledSun = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weigths.bold};
    color: ${theme.colors.blue};
  }

  span:last-child {
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weigths.medium};
  }
`

export const StyledFeels = styled(StyledSun)``
