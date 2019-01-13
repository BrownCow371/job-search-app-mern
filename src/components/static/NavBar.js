import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = "navbar clearfix">
            <NavLink to = "/"exact>Home</NavLink>
            <NavLink to = "/test"exact>Test</NavLink>
        </div>
    )
}
export default NavBar;