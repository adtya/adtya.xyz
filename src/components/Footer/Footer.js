import React from "react";

import Icons from "../Icons";
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div>
                <a className={"socialIcon"} href={"mailto:hi@adtya.xyz"}>
                    {Icons.email}
                </a>
                <a className={"socialIcon"}
                   href={"https://keys.openpgp.org/vks/v1/by-fingerprint/6907B695BEC5DE86D5AB3E40D6AC3438C1C739A9"}>
                    {Icons.gpg}
                </a>
                <a className={"socialIcon"} href={"https://fosstodon.org/@adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Icons.mastodon}
                </a>
                <a className={"socialIcon"} href={"https://aana.site/@adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Icons.mastodon}
                </a>
                <a className={"socialIcon"} href={"https://pixelfed.social/adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Icons.instagram}
                </a>
                <a className={"socialIcon"} href={"https://github.com/adtya"} target={"_blank"} rel={"noreferrer"}>
                    {Icons.github}
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