import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
  padding-top: ${theme.space[2]};
  padding-bottom: ${theme.space[1]};
`
export const StyledListItem = styled.li`
  width: 100%;
  max-width: calc(33.3% - 10px);

  @media (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const StyledParagraph = styled.p`
  font-size: ${theme.font.sizes.xsmall};
  margin-left: 10px;
`
