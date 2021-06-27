import React from "react";
import {NavLink} from "react-router-dom";

import styles from './nav.module.css';

class Nav extends React.Component {
    render() {
        return (
            <nav style={{align: 'center'}}>
                <NavLink exact activeClassName={styles.this} to="/">About Me</NavLink>
                <NavLink exact activeClassName={styles.this} to="/contact">Contact</NavLink>
                <NavLink exact activeClassName={styles.this} to="/elsewhere">Elsewhere</NavLink>
                <a href={"https://blog.adtya.xyz"}>Blog</a>
            </nav>
        );
    }
}

export default Nav;