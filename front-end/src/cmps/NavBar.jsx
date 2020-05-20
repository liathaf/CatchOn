import React from 'react'
import { Link } from 'react-router-dom'


export function NavBar() {
    return (

        <nav className="navbar">
            <Link className="logo" to="/">CatchOn </Link>
            <ul className="links">
                <li><Link to="/edit">Create Event</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>

    )
}
