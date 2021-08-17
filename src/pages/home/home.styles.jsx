import styled from 'styled-components'
import { RouteComponentWrapper } from '../../components/route/route.styles'
import { device } from '../../components/styledComponents/GlobalStyle'

export const HomePageWrapper = styled(RouteComponentWrapper)`
  justify-content: space-between;
  padding: 10px 16px;
  flex-wrap: wrap;
  align-content: flex-start;
`
export const HomePageZone = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 16px 10px;
  min-width: 400px;
  min-height: 400px;

  @media (${device.mobile}) {
    min-width: calc(100% - 40px);
  }
`
