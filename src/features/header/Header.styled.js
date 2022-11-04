import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const StyledHeader = styled.header`
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 3px 0px gray;
`
export const StyledContainer = styled.div`
  padding: ${theme.space[2]};
  max-width: ${theme.projectWidth};
  margin: 0 auto;
`
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StyledTitle = styled.h4`
  font-size: 3em;
  line-height: ${theme.font.lineHeights.small};
  color: ${theme.colors.black};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.font.sizes.small};
  }

  svg {
    padding-left: ${theme.space[1]};
    width: ${theme.space[5]};
  }
`
export const StyledLogo = styled.img`
  width: object-fit;
  height: 4.2em;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: 2em;
  }
`

// export const StyledContainer = styled.a`
//   ${(props) => useVariant(props.variant, variants)}
// `
