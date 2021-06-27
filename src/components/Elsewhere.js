import React from "react";

class Elsewhere extends React.Component {
    componentDidMount() {
        document.title = "Elsewhere | adtya.xyz";
    }

    render() {
        return (
            <main>
                <h3>Other places on the interwebs one might find me ...</h3>
                <ul>
                    <li>
                        <a href={"https://knitlabs.org"} target={"_blank"} rel={"noreferrer"}>
                            Knitlabs
                        </a>
                        <small>
                            , an entity born out of a need to showcase our ideas and as a playground to test out these
                            ideas.
                        </small>
                    </li>
                    <li>
                        <a href={"https://drunkphilosophy.live"} target={"_blank"} rel={"noreferrer"}>
                            Drunk Philosophy
                        </a>
                        <small>
                            , Some of us have a habit of buying domain names without any actual use for it. This is one
                            such domain, where we came up with a use for it after the fact.
                        </small>
                    </li>
                </ul>
            </main>
        );
    }
}

export default Elsewhere;