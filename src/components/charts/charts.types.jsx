import PropTypes from 'prop-types'

export const options = PropTypes.shape({
  xAxis: PropTypes.shape({
    type: PropTypes.string,
    data: PropTypes.array,
  }),
  yAxis: PropTypes.shape({
    type: PropTypes.string,
    data: PropTypes.array,
  }),
  series: PropTypes.array
})
