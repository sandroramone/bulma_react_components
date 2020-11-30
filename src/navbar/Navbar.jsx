import React from 'react'
import PropTypes from 'prop-types'

import * as Inner from './components'
import { ConcatClasses } from '../utils'

const Navbar = ({ color, transparent, children, position }) => {
    position = position ? `is-fixed-${position}` : ''
    color = color ? `is-${color}` : ''
    const classes = ConcatClasses(
        'navbar',
        position,
        color,
        { 'is-transparent': transparent }
    )

    return (
        <nav className={classes} role="navigation" aria-label="main navigation">
            {children}
        </nav>
    )
}

Navbar.propTypes = {
    color: PropTypes.string,
    transparent: PropTypes.bool,
    position: PropTypes.string,
    children: PropTypes.any
}

Navbar.defaultProps = {
    transparent: false,
    position: ''
}

Navbar.Start = Inner.Start
Navbar.End = Inner.End
Navbar.Brand = Inner.Brand
Navbar.Menu = Inner.Menu
Navbar.Item = Inner.Item
Navbar.Link = Inner.Link
Navbar.Dropdown = Inner.Dropdown
Navbar.Divider = Inner.Divider

export { Navbar }
