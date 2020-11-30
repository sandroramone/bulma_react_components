import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../utils'

const Tag = ({ color, size, rounded, deletes, children }) => {
    color = color ? `is-${color}` : ''
    size = size ? `is-${size}` : ''

    const classes = ConcatClasses(
        'tag',
        color,
        size,
        {
            'is-rounded': rounded,
            'is-delete': deletes
        }
    )

    return (
        <span className={classes}>
            { children }
        </span>
    )
}

Tag.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    rounded: PropTypes.bool,
    deletes: PropTypes.bool,
    children: PropTypes.any
}

export { Tag }
