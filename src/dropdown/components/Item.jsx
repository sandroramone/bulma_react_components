import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ children }) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="dropdown-item">
        { children }
    </a>
)

Item.propTypes = {
    children: PropTypes.any
}

export { Item }
