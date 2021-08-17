import { useRef } from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'

const duration = 200

const animations = {
  fade: {
    default: {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    },
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  },
}

const Animate = ({ in: inProp, type, children }) => {
  const ref = useRef(null)

  return (
    <Transition nodeRef={ref} in={inProp} timeout={inProp ? 0 : duration} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          style={{
            ...animations[type].default,
            ...animations[type][state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

Animate.propTypes = {
  in: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(Object.keys(animations)),
  children: PropTypes.element.isRequired,
}

export default Animate
