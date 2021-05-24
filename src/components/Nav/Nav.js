import React from "react";
import {NavLink} from "react-router-dom";

import styles from './nav.module.css';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLink exact activeClassName={styles.this} to="/">Home</NavLink>
                <NavLink exact activeClassName={styles.this} to="/about">About Me</NavLink>
                <NavLink exact activeClassName={styles.this} to="/contact">Contact Me</NavLink>
            </nav>
        );
    }
}

export default Nav;