import React from "react";
import {NavLink} from "react-router-dom";

import './nav.module.css';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLink exact activeClassName="this" to="/">Home</NavLink>
                <NavLink exact activeClassName="this" to="/about">About Me</NavLink>
                <NavLink exact activeClassName="this" to="/contact">Contact Me</NavLink>
            </nav>
        );
    }
}

export default Nav;