import React from "react";

import SadDoggo from './sad-doggo.png'

class NoMatch extends React.Component {
    componentDidMount() {
        document.title = `Oops! | adtya.xyz`
    }

    render() {
        return (
            <main style={{textAlign: "center"}}>
                <img alt={"Sad Doggo"} src={SadDoggo}/>
                <h2>Doggo couldn't find what you're looking for!! Now he's sad.</h2>
            </main>
        );
    }
}

export default NoMatch;