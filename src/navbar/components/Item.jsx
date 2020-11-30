import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ConcatClasses } from '../../utils'

const returnElement = (element, to, text, classes, children, onClick) => {
    // eslint-disable-next-line default-case
    switch (element) {
    case 'link':
        return <Link className={classes} to={to} onClick={onClick}>{text}</Link>
    case 'div':
        return (
            <div className={classes} onClick={onClick}>
                {children}
            </div>
        )
    }
}

const Item = ({ to, text, dropdownup, dropdown, hoverable, RenderAs, children, onClick }) => {
    const classes = ConcatClasses(
        'navbar-item',
        {
            'has-dropdown': dropdown,
            'has-dropdown-up': dropdownup,
            'is-hoverable': hoverable
        }
    )

    return returnElement(RenderAs, to, text, classes, children, onClick)
}

Item.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string,
    dropdownup: PropTypes.bool,
    dropdown: PropTypes.bool,
    hoverable: PropTypes.bool,
    RenderAs: PropTypes.string,
    children: PropTypes.any
}

Item.defaultProps = {
    dropdownup: false,
    dropdown: false,
    hoverable: false,
    RenderAs: 'link'
}

export { Item }
