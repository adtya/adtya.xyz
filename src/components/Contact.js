import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <main>
                <h1>Contact Me</h1>
                <p>You can get in touch with me over <a href={"mailto:sayhi@adtya.xyz"}>email</a> or on Mastodon
                    at <a
                        href={"https://fosstodon.org/@adtya"}>Fosstodon</a> or <a
                        href={"https://aana.site/@adtya"}>ആന.സൈറ്റ്</a>.
                    <br/>
                    <small>&#42;If you're coming across Mastodon for the first time, you can check it out <a
                        target={"_blank"} rel={"noreferrer"} href={"https://joinmastodon.org/"}>here</a>.</small>
                </p>
                <small>
                    Also <a
                    href={"https://keys.openpgp.org/vks/v1/by-fingerprint/95EA0E6BF507E8EA346AC8740C7F35F4F821290F"}>
                    here's my public key
                </a> if you want to send me encrypted emails. If your public key is available on a keyserver or if you
                    tell me where to find your public key, I too can send you encrypted emails.
                </small>
            </main>
        );
    }
}

export default Contact;