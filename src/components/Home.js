import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        document.title = "Home Me | adtya.xyz";
    }

    render() {

        return (
            <main>
                <h1>About Me</h1>
                <p>Hello stranger, welcome to my humble abode on the internet.
                    My name is Adithya. I'm one of those people you'll rarely find on mainstream social media, so
                    anything I
                    want to put out there will be on this website.
                    <br/>
                    <br/>
                    I'm a huge fan of and advocate for everything Open Source and Privacy respecting. I love poking
                    around
                    and learning about new pieces of tech that cater a transparent and private internet for everyone.
                    <br/>
                    <br/>
                    In my professional life, I'm a Developer at <a href={"https://thoughtworks.com"} target={"_blank"}
                                                                   rel={"noreferrer"}>Thoughtworks</a>, where I
                    work
                    with various tools, technologies, languages and frameworks across the board in a pursuit to create
                    extraordinary software solutions.
                    <br/>
                </p>
            </main>
        );
    }
}

export default Home;