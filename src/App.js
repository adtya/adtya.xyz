import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
