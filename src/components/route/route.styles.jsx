import styled from 'styled-components'

export const RouteWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const RouteGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: calc(100% - 60px);
`

export const RouteComponentWrapper = styled.div`
  overflow: auto;
  flex-grow: 1;
  display: flex;
`
