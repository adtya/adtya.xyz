import React from "react";

class Elsewhere extends React.Component {
    render() {
        return (
            <main>
                <h3>Other places on the interwebs one might find me ...</h3>
                <ul>
                    <li>
                        <a href={"https://drunkphilosophy.live"} target={"_blank"} rel={"noreferrer"}>
                            Drunk Philosophy
                        </a>
                        <small>
                            , a place ran by me and some friends. A place of which the sole purpose is to make no sense.
                        </small>
                    </li>
                    <li>
                        <a href={"https://knitlabs.org"} target={"_blank"} rel={"noreferrer"}>
                            Knitlabs
                        </a>
                        <small>
                            , a place to put random pieces of code, most, like all side projects born one evening and
                            die the next morning.
                        </small>
                    </li>
                </ul>
            </main>
        );
    }
}

export default Elsewhere;