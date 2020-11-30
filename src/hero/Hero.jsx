import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const Hero = props => {
    const { location: { pathname } } = props
    const title = pathname.split('/')
    return (
        <section style={{ marginTop: '52px' }} className="hero is-info">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {title[title.length-1].replace(/_/g, ' ').toUpperCase() || 'HOME'}
                    </h1>
                    <h2 className="subtitle">
                        {/* Primary subtitle */}
                    </h2>
                </div>
            </div>
        </section>
    )
}

Hero.propTypes = {
    location: PropTypes.object,
    children: PropTypes.any
}

const hero = withRouter(Hero)
export { hero as Hero }
