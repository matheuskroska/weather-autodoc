import styled from 'styled-components'
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
`

export const StyledTempWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${theme.space[2]} 0 ${theme.space[3]};
`

export const StyledTempMinMax = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${theme.space[1]};
  gap: ${theme.space[0]};
  font-weight: ${theme.font.weigths.medium};

  span:first-child {
    font-size: ${theme.font.sizes.small};
  }

  span:last-child {
    color: ${theme.colors.gray400};
    font-size: ${theme.font.sizes.xsmall};
  }
`

export const StyledAverage = styled(StyledTempMinMax)`
  align-items: center;

  span:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const StyledCurrent = styled.p`
  font-size: ${theme.font.sizes.large};
  display: flex;
  align-items: center;
`

export const StyledFlex = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`
export const StyledLastUpdate = styled.div`
  bold {
    font-weight: ${theme.font.weigths.bold};
    margin-right: ${theme.space[0]};
  }
  font-size: ${theme.font.sizes.xsmall};
  color: ${theme.colors.gray400};
`
