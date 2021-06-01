import React from 'react';

import Posts from "./Posts/Posts";

class Home extends React.Component {
    componentDidMount() {
        document.title = "adtya.xyz | Home";
    }

    render() {
        return (
            <main>
                <Posts/>
            </main>
        );
    }
}

export default Home;