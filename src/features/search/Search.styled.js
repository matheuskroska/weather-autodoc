import styled from 'styled-components'
import { AsyncPaginate } from 'react-select-async-paginate'
import { theme } from '../../styles/theme'

export const StyledSearch = styled(AsyncPaginate)`
  font-size: ${theme.font.sizes.small};
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  border-color: transparent;
  border-radius: ${theme.borderRadius.sm};
  margin-bottom: ${theme.space[0]};
`
