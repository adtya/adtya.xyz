import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Nav from './components/Nav'
import NoMatch from "./NoMatch";

function App() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
