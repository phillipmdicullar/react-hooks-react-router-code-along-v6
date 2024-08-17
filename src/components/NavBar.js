import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
function NavBar() {
    return (
        <div>
            <nav>
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
                <NavLink to="/login" className="nav-link">
                    Login
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar