import React from "react";

import {Email, Github, Instagram, Mastodon, OpenPGP} from "../Icons";
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div>
                <a className={"socialIcon"} href={"mailto:hi@adtya.xyz"}>
                    {Email}
                </a>
                <a className={"socialIcon"}
                   href={"https://keys.openpgp.org/vks/v1/by-fingerprint/95EA0E6BF507E8EA346AC8740C7F35F4F821290F"}>
                    {OpenPGP}
                </a>
                <a className={"socialIcon"} href={"https://fosstodon.org/@adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Mastodon}
                </a>
                <a className={"socialIcon"} href={"https://aana.site/@adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Mastodon}
                </a>
                <a className={"socialIcon"} href={"https://pixelfed.social/adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Instagram}
                </a>
                <a className={"socialIcon"} href={"https://github.com/adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Github}
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