import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
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
                    <Route path={"/*"}>
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
