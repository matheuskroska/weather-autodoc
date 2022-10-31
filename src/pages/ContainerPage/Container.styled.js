import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const StyledMain = styled.main`
  max-width: ${theme.projectWidth};
  margin: auto;
`

export const StyledContainer = styled.div`
  padding: 0 ${theme.space[2]};
`
export const StyledWrapper = styled.div``

export const StyledSection = styled.section`
  padding-top: ${theme.space[2]};
`

export const StyledTitle = styled.h1`
  font-size: ${theme.font.sizes.large};
  display: flex;
  align-items: center;
  color: ${theme.colors.blue};
  justify-content: center;
  margin: ${theme.space[6]} 0 ${theme.space[0]};

  svg {
    margin-left: ${theme.space[1]};
    width: ${theme.space[2]};
    height: ${theme.space[2]};
  }
`

export const StyledSubtitle = styled.h2`
  font-size: ${theme.font.sizes.paragraph};
  font-weight: ${theme.font.weigths.light};
  display: flex;
  align-items: center;
  color: ${theme.colors.blue};
  justify-content: center;
  margin: ${theme.space[1]} 0 ${theme.space[6]};
`

export const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${theme.space[3]} 0 ${theme.space[0]};
  gap: ${theme.space[0]};
`
// linear-gradient(to right,#e62e4d,#981449)
