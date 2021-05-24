import React from "react";

import SadDoggo from './sad-doggo.png'

class NoMatch extends React.Component {
    render() {
        return (
            <main style={{textAlign: "center"}}>
                <img alt={"Sad Doggo"} src={SadDoggo}/>
                <h2>Aww, Doggo couldn't find what you're looking for!! Now he's sad.</h2>
            </main>
        );
    }
}

export default NoMatch;