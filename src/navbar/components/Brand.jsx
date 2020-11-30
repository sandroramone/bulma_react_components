import React from 'react'
import PropTypes from 'prop-types'

const addBurguer = (req, active, toggle) => req ? (
    // eslint-disable-next-line no-script-url
    <span href="javascript:void(0)" role="button" onClick={toggle} className={`navbar-burger burger ${active ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </span>
) : ''

const Brand = ({ image, alt, href, burguer, style, active, toggle }) => (
    <div className="navbar-brand">
        <a className="navbar-item" href={href}>
            <img src={image} style={style} alt={alt} width="112" height="28" />
        </a>
        { addBurguer(burguer, active, toggle) }
    </div>
)

Brand.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
    burguer: PropTypes.bool,
    style: PropTypes.object,
    active: PropTypes.bool,
    toggle: PropTypes.func,
    children: PropTypes.any
}

Brand.defaultProps = {
    active: false
}

export { Brand }
