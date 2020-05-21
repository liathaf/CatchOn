import React from 'react'
import { Link } from 'react-router-dom'


export function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-content container">
            <Link className="logo lead" to="/">CatchOn </Link>
            <ul className="links">
                <li><Link to="/edit">Create Event</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            </div>
        </nav>

    )
}
