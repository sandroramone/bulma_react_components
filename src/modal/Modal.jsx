import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../button'

const Modal = ({ showModal, title, text, textConfirm, textCancel, onConfirm, onCancel, onClose, confirmColor='is-success', cancelColor='is-danger' }) => (
    <div className={`modal ${showModal ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
                <p className="modal-card-title">{title}</p>
                <button
                    className="delete"
                    aria-label="close"
                    onClick={onClose}
                />
            </header>
            <section className="modal-card-body">
                <p>{text}</p>
            </section>
            <footer className="modal-card-foot">
                <Button
                    RenderAs="button"
                    className={confirmColor}
                    onClick={onConfirm}
                >
                    {textConfirm}
                </Button>
                <Button
                    RenderAs="button"
                    className={cancelColor}
                    onClick={onCancel}
                >
                    {textCancel}
                </Button>
            </footer>
        </div>
    </div>
)

Modal.propTypes = {
    children: PropTypes.any
}

export { Modal }
