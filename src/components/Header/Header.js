import React from "react";

import Nav from "../Nav/Nav";
import styles from './header.module.css'
import Logo from './logo512.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className={styles.ghost} src={Logo}
                     alt="One of the ghosts from pacman, with a different set of colors"/>
                <h1>Adithya Nair</h1>
                <Nav/>
            </header>
        )
    }
}

export default Header;