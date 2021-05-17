import React from "react";
import {NavLink} from "react-router-dom";

import './Nav.css';

function Nav() {
    return (
        <nav>
            <NavLink exact activeClassName="this" to="/">Home</NavLink>
        </nav>
    );
}

export default Nav;