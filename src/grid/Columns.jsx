import React from 'react'
import PropTypes from 'prop-types'

import { ConcatClasses } from '../utils'

const Columns = ({ children, multiline, device, className }) => {
    multiline = multiline ? 'is-multiline' : ''
    device = device ? `is-${device}` : ''
    const classes = ConcatClasses('columns', multiline, device, className)

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Columns.propTypes = {
    multiline: PropTypes.bool,
    device: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string
}

export { Columns }
