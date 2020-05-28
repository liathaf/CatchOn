import React from 'react'

export function Modal(props) {
    const {event , onRemoveModal} = props
    return (
        <div className="screen" onClick={onRemoveModal}>
            <div className="modal">
                <button className="close-modal-btn" onClick={onRemoveModal}>X</button>
                <div className="modal-details">
                    <p>You need to register in order to join</p>
                    <h2 className="event-title">{event.title}</h2>
                </div>
            </div>
        </div>
    )
}