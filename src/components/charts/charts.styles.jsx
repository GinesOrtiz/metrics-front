import styled from 'styled-components'
import ReactEChartsCore from 'echarts-for-react/lib/core'

export const Echarts = styled(ReactEChartsCore)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  
  > div:first-child {
    width: 100% !important;
  }
`
