import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ children }) => (
    <div className="message-body">
        { children }
    </div>
)

Body.propTypes = {
    children: PropTypes.any
}

export { Body }
