import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../../utils'

const Link = ({ arrowless, children }) => {
    const classes = ConcatClasses('navbar-link', { 'is-arrowless': arrowless })

    return (
        <span className={classes}>
            {children}
        </span>
    )
}

Link.propTypes = {
    arrowless: PropTypes.bool,
    children: PropTypes.any
}

export { Link }
