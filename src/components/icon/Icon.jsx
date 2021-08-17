import React from 'react'
import PropTypes from 'prop-types'

import { IconWrapper } from './icon.styles'

const Icon = ({ type }) => {
  return <IconWrapper>{type}</IconWrapper>
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
