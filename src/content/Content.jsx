import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../utils'

const Content = ({ children, className }) => {
    const classes = ConcatClasses('content', className)

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Content.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
}

export { Content }
