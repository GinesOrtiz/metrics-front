import React from 'react'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, TitleComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

import { Echarts } from './charts.styles'
import * as chartTypes from './charts.types'

echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer])

const SmoothLineChart = ({ options }) => {
  const option = {
    grid: {
      top: '20px',
      left: '50px',
      right: '0px',
      bottom: '20px'
    },
    ...options,
  }
  return (
    <Echarts
      style={{ height: '100%', width: '100%' }}
      echarts={echarts}
      option={option}
      notMerge={true}
      lazyUpdate={true}
    />
  )
}

SmoothLineChart.propTypes = {
  options: chartTypes.options,
}

export default SmoothLineChart
