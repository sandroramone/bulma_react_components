import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../../utils'

const Dropdown = ({ boxed, right, children, hide }) => {
    const classes = ConcatClasses(
        'navbar-dropdown',
        { 'is-boxed': boxed, 'is-right': right, 'is-hidden-mobile': hide }
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Dropdown.propTypes = {
    hide: PropTypes.bool,
    boxed: PropTypes.bool,
    right: PropTypes.bool,
    children: PropTypes.any
}

Dropdown.defaultTypes = {
    hide: false
}

export { Dropdown }
