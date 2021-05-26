import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
import Post from "./components/Post/Post";
import Elsewhere from "./components/Elsewhere";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path={"/"}>
                            <Home/>
                        </Route>
                        <Route exact path={"/about"}>
                            <About/>
                        </Route>
                        <Route exact path={"/contact"}>
                            <Contact/>
                        </Route>
                        <Route exact path={"/elsewhere"}>
                            <Elsewhere/>
                        </Route>
                        <Route path={"/posts/:postId"} component={Post}/>
                        <Route path={"/*"}>
                            <NoMatch/>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
