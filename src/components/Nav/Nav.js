import React from "react";
import {NavLink} from "react-router-dom";

import styles from './nav.module.css';

class Nav extends React.Component {
    render() {
        return (
            <nav style={{align: 'center'}}>
                <NavLink exact activeClassName={styles.this} to="/">Home</NavLink>
                <NavLink exact activeClassName={styles.this} to="/about">About</NavLink>
                <NavLink exact activeClassName={styles.this} to="/contact">Contact</NavLink>
                <NavLink exact activeClassName={styles.this} to="/elsewhere">Elsewhere</NavLink>
            </nav>
        );
    }
}

export default Nav;