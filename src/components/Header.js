import React from "react";

import Nav from "./Nav";
import './styles/Header.css'
import Logo from './assets/logo512.png';

function Header() {
    return (
        <header>
            <img className="ghost" src={Logo}
                 alt="One of the ghosts from pacman, with a different set of colors"/>
            <h1>Adithya Nair</h1>
            <Nav/>
        </header>
    )
}

export default Header;