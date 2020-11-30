import React from 'react'
import PropTypes from 'prop-types'

import { ConcatClasses } from '../utils'

const Column = ({ style, size, offset, children, className }) => {
    size = size ? `is-${size}` : ''
    offset = offset ? `is-offset-${offset}` : ''
    const classes = ConcatClasses('column', size, offset, className)

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    )
}

Column.propTypes = {
    style: PropTypes.object,
    size: PropTypes.string,
    offset: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
}

export { Column }
