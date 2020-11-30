import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../utils'

const Buttons = ({ size, addons, children, className }) => {
    size = size ? `are-${size}` : ''

    const classes = ConcatClasses('buttons', size, className, { 'has-addons': addons })

    return (
        <div className={classes}>
            { children }
        </div>
    )
}

Buttons.propTypes = {
    size: PropTypes.string,
    addons: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any
}

export { Buttons }
