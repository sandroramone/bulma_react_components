import React from 'react'
import PropTypes from 'prop-types'

import * as Inner from './components'

import { ConcatClasses } from '../utils'

const Dropdown = ({ hoverable, active, text, children }) => {
    const classes = ConcatClasses(
        'dropdown',
        {
            'is-active': active,
            'is-hoverable': hoverable
        }
    )

    return (
        <div className={classes}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{text}</span>
                    <span className="icon is-small">
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    hoverable: PropTypes.bool,
    text: PropTypes.string,
    active: PropTypes.bool,
    children: PropTypes.any
}

Dropdown.Item = Inner.Item
Dropdown.Divider = Inner.Divider

export { Dropdown }
