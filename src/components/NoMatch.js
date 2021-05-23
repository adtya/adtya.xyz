import React from "react";

import SadDoggo from './assets/sad-doggo.png'

function NoMatch() {
    return (
        <main style={{textAlign: "center"}}>
            <img alt={"Sad Doggo"} src={SadDoggo}/>
            <h2>Aww, Doggo couldn't find what you're looking for!! Now he's sad.</h2>
        </main>
    );
}

export default NoMatch;