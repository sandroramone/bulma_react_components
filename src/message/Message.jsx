import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../utils'

import * as Inner from './components'

const Message = ({ color, size, children }) => {
    color = color ? `is-${color}` : ''
    size = size ? `is-${size}` : ''

    const classes = ConcatClasses('message', color, size)

    return (
        <article className={classes}>
            { children }
        </article>
    )
}

Message.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.any
}

Message.Header = Inner.Header
Message.Body = Inner.Body

export { Message }
