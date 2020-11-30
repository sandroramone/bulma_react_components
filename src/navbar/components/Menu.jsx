import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../../utils'

const Menu = ({ children, active }) => {
    const classes = ConcatClasses('navbar-menu', { 'is-active': active })
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Menu.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any
}

Menu.defaultProps = {
    active: false
}

export { Menu }
