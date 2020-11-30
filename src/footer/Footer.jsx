import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../utils'

const Footer = ({ background, children }) => {
    background = background ? `has-background-${background}` : ''
    const classes = ConcatClasses('footer', background)

    return (
        <footer className={ classes }>
            <div className="content has-text-centered">
                { children }
            </div>
        </footer>
    )
}

Footer.propTypes = {
    background: PropTypes.string,
    children: PropTypes.any
}

export { Footer }
