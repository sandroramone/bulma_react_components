import React from 'react'
import PropTypes from 'prop-types'

const Start = ({ children }) => (
    <div className="navbar-start">
        {children}
    </div>
)

Start.propTypes = {
    children: PropTypes.any
}

const End = ({ children }) => (
    <div className="navbar-end">
        {children}
    </div>
)

End.propTypes = {
    children: PropTypes.any
}


export { Start, End }
