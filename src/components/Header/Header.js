import React from "react";

import './Header.css'
import Logo from './logo512.png'

function Header() {
    return (
        <header>
            <img className="ghost" src={Logo} alt="One of the ghosts from pacman, with a different set of colors"/>
            <h1>adtya.xyz</h1>
        </header>
    )
}

export default Header;