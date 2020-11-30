import React from 'react'
import PropTypes from 'prop-types'
import { ConcatClasses } from '../utils'

const Button = ({
    className,
    color,
    size,
    fullwidth,
    outlined,
    rounded,
    inverted,
    hovered,
    focused,
    active,
    loading,
    disabled,
    RenderAs,
    type,
    value,
    style,
    children,
    onClick
}) => {

    color = color ? `is-${color}` : ''
    size = size ? `is-${size}` : ''

    const classes = ConcatClasses(
        'button',
        className,
        color,
        size,
        {
            'is-fullwidth': fullwidth,
            'is-outlined': outlined,
            'is-inverted': inverted,
            'is-rounded': rounded,
            'is-hovered': hovered,
            'is-focused': focused,
            'is-active': active,
            'is-loading': loading
        }
    )

    switch (RenderAs) {
    case 'button':
        return (
            <button className={classes} onClick={onClick} style={style} disabled={disabled}>
                {children}
            </button>
        )

    case 'input':
        return (
            <input type={type} value={value} onClick={onClick} style={style} className={classes} disabled={disabled}>
                {children}
            </input>
        )

    default:
        return (
            <span className={classes} onClick={onClick} style={style} disabled={disabled}>
                {children}
            </span>
        )
    }
}

Button.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    fullwidth: PropTypes.bool,
    outlined: PropTypes.bool,
    inverted: PropTypes.bool,
    rounded: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    active: PropTypes.bool,
    loading: PropTypes.bool,
    RenderAs: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
}

Button.defaultProps = {
    RenderAs: 'a',
    style: {}
}

export { Button }
