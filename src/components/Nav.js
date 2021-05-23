import React from "react";
import {NavLink} from "react-router-dom";

import './styles/Nav.css';

function Nav() {
    return (
        <nav>
            <NavLink exact activeClassName="this" to="/">Home</NavLink>
            <NavLink exact activeClassName="this" to="/about">About Me</NavLink>
            <NavLink exact activeClassName="this" to="/contact">Contact Me</NavLink>
        </nav>
    );
}

export default Nav;