import React from "react";

import {Email, GitHub, Instagram, Mastodon, OpenPGP} from "./Icons";
import styles from './footer.module.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <a className={styles.socialIcon} href={"mailto:sayhi@adtya.xyz"}>
                        {Email}
                    </a>
                    <a className={styles.socialIcon}
                       href={"https://keys.openpgp.org/vks/v1/by-fingerprint/95EA0E6BF507E8EA346AC8740C7F35F4F821290F"}>
                        {OpenPGP}
                    </a>
                    <a className={styles.socialIcon} href={"https://fosstodon.org/@adtya"}>
                        {Mastodon}
                    </a>
                    <a className={styles.socialIcon} href={"https://aana.site/@adtya"}>
                        {Mastodon}
                    </a>
                    <a className={styles.socialIcon} href={"https://pixelfed.social/adtya"}>
                        {Instagram}
                    </a>
                    <a className={styles.socialIcon} href={"https://github.com/adtya"}>
                        {GitHub}
                    </a>
                </div>
                <p>Made with <a href="https://simplecss.org/" target="_blank"
                                rel="noreferrer">Simple.css</a> and <a href="https://draculatheme.com/" target="_blank"
                                                                       rel="noreferrer">Dracula</a><small>(for dark
                    mode)</small>
                </p>
                <p><small>Hosted on a <a href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/"
                                         target="_blank"
                                         rel="noreferrer">Raspberry Pi</a> with the help of <a
                    href="https://github.com/fatedier/frp" target="_blank" rel="noreferrer">frp</a>.
                </small></p>
            </footer>
        );
    }
}

export default Footer;