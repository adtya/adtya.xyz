import React from "react";
import {Link} from "react-router-dom";

import Icons from "../Icons";
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div>
                <a className={"socialIcon"} href={"mailto:hi@adtya.xyz"}>
                    {Icons.email}
                </a>
                <Link className={"socialIcon"} to={"/gpg"}>
                    {Icons.gpg}
                </Link>
                <a className={"socialIcon"} href={"https://fosstodon.org/@adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Icons.mastodon}
                </a>
                <a className={"socialIcon"} href={"https://aana.site/@adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Icons.mastodon}
                </a>
                <a className={"socialIcon"} href={"https://github.com/adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Icons.github}
                </a>
                <a className={"socialIcon"} href={"https://linkedin.com/in/adtyanair"}>
                    {Icons.linkedin}
                </a>
            </div>
            <p>Made with <a href="https://simplecss.org/" target="_blank"
                            rel="noreferrer">Simple.css</a> and <a href="https://draculatheme.com/"
                                                                   target="_blank"
                                                                   rel="noreferrer">Dracula</a><small>(for dark
                mode)</small>
            </p>
        </footer>
    );
}

export default Footer;