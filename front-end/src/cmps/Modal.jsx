import React from 'react'
import { Link } from 'react-router-dom'


export function Modal(props) {
    const {event , onRemoveModal} = props
    return (
        <div className="screen" onClick={onRemoveModal}>
            <div className="modal">
                <button className="close-modal-btn" onClick={onRemoveModal}>X</button>
                <div className="modal-details">
                    <p>Joining <span><h2 className="event-title">{event.title}</h2></span> requires login </p>
                    <button className="login-modal-btn"><Link to="/login">LOGIN</Link></button>
                    <div className="signup"><p>New member?</p> <Link to="/signup">Sign up</Link></div>
                  
                </div>
            </div>
        </div>
    )
}

