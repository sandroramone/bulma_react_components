import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
    <div className="message-header">
        <p>{title}</p>
        <button className="delete" aria-label="delete"></button>
    </div>
)

Header.propTypes = {
    title: PropTypes.string
}

export { Header }
