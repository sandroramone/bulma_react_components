import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../utils'

const Notification = ({ color, children }) => {
    color = color ? `is-${color}` : ''
    const classes = ConcatClasses('notification', color)

    return (
        <div className={classes}>
            <button className="delete" />
            {children}
        </div>
    )
}
Notification.propTypes = {
    children: PropTypes.any
}

export { Notification }
