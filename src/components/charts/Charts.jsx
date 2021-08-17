import React from 'react'
import PropTypes from 'prop-types'

import SmoothLineChart from './SmoothLineChart'
import * as chartTypes from './charts.types'

const Charts = ({ type, options }) => {
  switch (type) {
    case 'smoothLine':
      return <SmoothLineChart options={options} />
    default:
      return null
  }
}

Charts.propsType = {
  type: PropTypes.string.isRequired,
  options: chartTypes.options,
}

export default Charts
